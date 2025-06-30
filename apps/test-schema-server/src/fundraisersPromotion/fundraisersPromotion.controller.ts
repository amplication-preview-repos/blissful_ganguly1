import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FundraisersPromotionService } from "./fundraisersPromotion.service";
import { FundraisersPromotionControllerBase } from "./base/fundraisersPromotion.controller.base";

@swagger.ApiTags("fundraisersPromotions")
@common.Controller("fundraisersPromotions")
export class FundraisersPromotionController extends FundraisersPromotionControllerBase {
  constructor(protected readonly service: FundraisersPromotionService) {
    super(service);
  }
}
