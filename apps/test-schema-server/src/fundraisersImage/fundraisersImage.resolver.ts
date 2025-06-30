import * as graphql from "@nestjs/graphql";
import { FundraisersImageResolverBase } from "./base/fundraisersImage.resolver.base";
import { FundraisersImage } from "./base/FundraisersImage";
import { FundraisersImageService } from "./fundraisersImage.service";

@graphql.Resolver(() => FundraisersImage)
export class FundraisersImageResolver extends FundraisersImageResolverBase {
  constructor(protected readonly service: FundraisersImageService) {
    super(service);
  }
}
