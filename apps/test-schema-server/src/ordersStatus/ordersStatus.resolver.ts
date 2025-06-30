import * as graphql from "@nestjs/graphql";
import { OrdersStatusResolverBase } from "./base/ordersStatus.resolver.base";
import { OrdersStatus } from "./base/OrdersStatus";
import { OrdersStatusService } from "./ordersStatus.service";

@graphql.Resolver(() => OrdersStatus)
export class OrdersStatusResolver extends OrdersStatusResolverBase {
  constructor(protected readonly service: OrdersStatusService) {
    super(service);
  }
}
