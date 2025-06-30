import * as graphql from "@nestjs/graphql";
import { OrdersProductResolverBase } from "./base/ordersProduct.resolver.base";
import { OrdersProduct } from "./base/OrdersProduct";
import { OrdersProductService } from "./ordersProduct.service";

@graphql.Resolver(() => OrdersProduct)
export class OrdersProductResolver extends OrdersProductResolverBase {
  constructor(protected readonly service: OrdersProductService) {
    super(service);
  }
}
