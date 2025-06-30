import * as graphql from "@nestjs/graphql";
import { CategoriesProductResolverBase } from "./base/categoriesProduct.resolver.base";
import { CategoriesProduct } from "./base/CategoriesProduct";
import { CategoriesProductService } from "./categoriesProduct.service";

@graphql.Resolver(() => CategoriesProduct)
export class CategoriesProductResolver extends CategoriesProductResolverBase {
  constructor(protected readonly service: CategoriesProductService) {
    super(service);
  }
}
