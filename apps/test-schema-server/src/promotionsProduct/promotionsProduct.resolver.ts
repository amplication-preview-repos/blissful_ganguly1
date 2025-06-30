import * as graphql from "@nestjs/graphql";
import { PromotionsProductResolverBase } from "./base/promotionsProduct.resolver.base";
import { PromotionsProduct } from "./base/PromotionsProduct";
import { PromotionsProductService } from "./promotionsProduct.service";

@graphql.Resolver(() => PromotionsProduct)
export class PromotionsProductResolver extends PromotionsProductResolverBase {
  constructor(protected readonly service: PromotionsProductService) {
    super(service);
  }
}
