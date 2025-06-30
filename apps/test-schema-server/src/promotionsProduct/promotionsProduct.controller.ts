import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PromotionsProductService } from "./promotionsProduct.service";
import { PromotionsProductControllerBase } from "./base/promotionsProduct.controller.base";

@swagger.ApiTags("promotionsProducts")
@common.Controller("promotionsProducts")
export class PromotionsProductController extends PromotionsProductControllerBase {
  constructor(protected readonly service: PromotionsProductService) {
    super(service);
  }
}
