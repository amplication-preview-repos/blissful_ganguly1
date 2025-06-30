import * as graphql from "@nestjs/graphql";
import { FundraisersProductResolverBase } from "./base/fundraisersProduct.resolver.base";
import { FundraisersProduct } from "./base/FundraisersProduct";
import { FundraisersProductService } from "./fundraisersProduct.service";

@graphql.Resolver(() => FundraisersProduct)
export class FundraisersProductResolver extends FundraisersProductResolverBase {
  constructor(protected readonly service: FundraisersProductService) {
    super(service);
  }
}
