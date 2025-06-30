import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PromotionsImageService } from "./promotionsImage.service";
import { PromotionsImageControllerBase } from "./base/promotionsImage.controller.base";

@swagger.ApiTags("promotionsImages")
@common.Controller("promotionsImages")
export class PromotionsImageController extends PromotionsImageControllerBase {
  constructor(protected readonly service: PromotionsImageService) {
    super(service);
  }
}
