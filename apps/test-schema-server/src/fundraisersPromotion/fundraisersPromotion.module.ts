import { Module } from "@nestjs/common";
import { FundraisersPromotionModuleBase } from "./base/fundraisersPromotion.module.base";
import { FundraisersPromotionService } from "./fundraisersPromotion.service";
import { FundraisersPromotionController } from "./fundraisersPromotion.controller";
import { FundraisersPromotionResolver } from "./fundraisersPromotion.resolver";

@Module({
  imports: [FundraisersPromotionModuleBase],
  controllers: [FundraisersPromotionController],
  providers: [FundraisersPromotionService, FundraisersPromotionResolver],
  exports: [FundraisersPromotionService],
})
export class FundraisersPromotionModule {}
