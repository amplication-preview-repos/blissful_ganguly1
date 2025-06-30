import { Module } from "@nestjs/common";
import { OrdersStatusModuleBase } from "./base/ordersStatus.module.base";
import { OrdersStatusService } from "./ordersStatus.service";
import { OrdersStatusController } from "./ordersStatus.controller";
import { OrdersStatusResolver } from "./ordersStatus.resolver";

@Module({
  imports: [OrdersStatusModuleBase],
  controllers: [OrdersStatusController],
  providers: [OrdersStatusService, OrdersStatusResolver],
  exports: [OrdersStatusService],
})
export class OrdersStatusModule {}
