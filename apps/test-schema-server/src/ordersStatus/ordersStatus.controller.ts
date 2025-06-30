import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrdersStatusService } from "./ordersStatus.service";
import { OrdersStatusControllerBase } from "./base/ordersStatus.controller.base";

@swagger.ApiTags("ordersStatuses")
@common.Controller("ordersStatuses")
export class OrdersStatusController extends OrdersStatusControllerBase {
  constructor(protected readonly service: OrdersStatusService) {
    super(service);
  }
}
