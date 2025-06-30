import * as graphql from "@nestjs/graphql";
import { CategoriesImageResolverBase } from "./base/categoriesImage.resolver.base";
import { CategoriesImage } from "./base/CategoriesImage";
import { CategoriesImageService } from "./categoriesImage.service";

@graphql.Resolver(() => CategoriesImage)
export class CategoriesImageResolver extends CategoriesImageResolverBase {
  constructor(protected readonly service: CategoriesImageService) {
    super(service);
  }
}
