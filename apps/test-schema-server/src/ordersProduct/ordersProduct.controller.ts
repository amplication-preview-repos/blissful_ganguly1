import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrdersProductService } from "./ordersProduct.service";
import { OrdersProductControllerBase } from "./base/ordersProduct.controller.base";

@swagger.ApiTags("ordersProducts")
@common.Controller("ordersProducts")
export class OrdersProductController extends OrdersProductControllerBase {
  constructor(protected readonly service: OrdersProductService) {
    super(service);
  }
}
