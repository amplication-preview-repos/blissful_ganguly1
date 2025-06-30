import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { OrdersProductController } from "../ordersProduct.controller";
import { OrdersProductService } from "../ordersProduct.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  caseSize: 42,
  createdAt: new Date(),
  fundraiserPrice: 42.42,
  id: "exampleId",
  image: "exampleImage",
  maxQty: 42,
  minQty: 42,
  name: "exampleName",
  price: 42.42,
  productUuid: "exampleProductUuid",
  profit: 42.42,
  quantity: 42,
  sku: "exampleSku",
  supplierUuid: "exampleSupplierUuid",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  caseSize: 42,
  createdAt: new Date(),
  fundraiserPrice: 42.42,
  id: "exampleId",
  image: "exampleImage",
  maxQty: 42,
  minQty: 42,
  name: "exampleName",
  price: 42.42,
  productUuid: "exampleProductUuid",
  profit: 42.42,
  quantity: 42,
  sku: "exampleSku",
  supplierUuid: "exampleSupplierUuid",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    caseSize: 42,
    createdAt: new Date(),
    fundraiserPrice: 42.42,
    id: "exampleId",
    image: "exampleImage",
    maxQty: 42,
    minQty: 42,
    name: "exampleName",
    price: 42.42,
    productUuid: "exampleProductUuid",
    profit: 42.42,
    quantity: 42,
    sku: "exampleSku",
    supplierUuid: "exampleSupplierUuid",
    typeField: "exampleTypeField",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  caseSize: 42,
  createdAt: new Date(),
  fundraiserPrice: 42.42,
  id: "exampleId",
  image: "exampleImage",
  maxQty: 42,
  minQty: 42,
  name: "exampleName",
  price: 42.42,
  productUuid: "exampleProductUuid",
  profit: 42.42,
  quantity: 42,
  sku: "exampleSku",
  supplierUuid: "exampleSupplierUuid",
  typeField: "exampleTypeField",
  updatedAt: new Date(),
};

const service = {
  createOrdersProduct() {
    return CREATE_RESULT;
  },
  ordersProducts: () => FIND_MANY_RESULT,
  ordersProduct: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("OrdersProduct", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: OrdersProductService,
          useValue: service,
        },
      ],
      controllers: [OrdersProductController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /ordersProducts", async () => {
    await request(app.getHttpServer())
      .post("/ordersProducts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /ordersProducts", async () => {
    await request(app.getHttpServer())
      .get("/ordersProducts")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /ordersProducts/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ordersProducts"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /ordersProducts/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/ordersProducts"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /ordersProducts existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/ordersProducts")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/ordersProducts")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
