import { Module } from "@nestjs/common";
import { OrdersProductModuleBase } from "./base/ordersProduct.module.base";
import { OrdersProductService } from "./ordersProduct.service";
import { OrdersProductController } from "./ordersProduct.controller";
import { OrdersProductResolver } from "./ordersProduct.resolver";

@Module({
  imports: [OrdersProductModuleBase],
  controllers: [OrdersProductController],
  providers: [OrdersProductService, OrdersProductResolver],
  exports: [OrdersProductService],
})
export class OrdersProductModule {}
