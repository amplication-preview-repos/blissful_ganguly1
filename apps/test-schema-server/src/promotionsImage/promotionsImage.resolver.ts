import * as graphql from "@nestjs/graphql";
import { PromotionsImageResolverBase } from "./base/promotionsImage.resolver.base";
import { PromotionsImage } from "./base/PromotionsImage";
import { PromotionsImageService } from "./promotionsImage.service";

@graphql.Resolver(() => PromotionsImage)
export class PromotionsImageResolver extends PromotionsImageResolverBase {
  constructor(protected readonly service: PromotionsImageService) {
    super(service);
  }
}
