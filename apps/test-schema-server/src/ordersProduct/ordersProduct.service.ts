import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrdersProductServiceBase } from "./base/ordersProduct.service.base";

@Injectable()
export class OrdersProductService extends OrdersProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
