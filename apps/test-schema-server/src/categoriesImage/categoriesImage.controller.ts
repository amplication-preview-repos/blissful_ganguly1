import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CategoriesImageService } from "./categoriesImage.service";
import { CategoriesImageControllerBase } from "./base/categoriesImage.controller.base";

@swagger.ApiTags("categoriesImages")
@common.Controller("categoriesImages")
export class CategoriesImageController extends CategoriesImageControllerBase {
  constructor(protected readonly service: CategoriesImageService) {
    super(service);
  }
}
