import * as graphql from "@nestjs/graphql";
import { FundraisersPromotionResolverBase } from "./base/fundraisersPromotion.resolver.base";
import { FundraisersPromotion } from "./base/FundraisersPromotion";
import { FundraisersPromotionService } from "./fundraisersPromotion.service";

@graphql.Resolver(() => FundraisersPromotion)
export class FundraisersPromotionResolver extends FundraisersPromotionResolverBase {
  constructor(protected readonly service: FundraisersPromotionService) {
    super(service);
  }
}
