import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CategoriesProductService } from "./categoriesProduct.service";
import { CategoriesProductControllerBase } from "./base/categoriesProduct.controller.base";

@swagger.ApiTags("categoriesProducts")
@common.Controller("categoriesProducts")
export class CategoriesProductController extends CategoriesProductControllerBase {
  constructor(protected readonly service: CategoriesProductService) {
    super(service);
  }
}
