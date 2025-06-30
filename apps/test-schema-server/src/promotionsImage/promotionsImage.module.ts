import { Module } from "@nestjs/common";
import { PromotionsImageModuleBase } from "./base/promotionsImage.module.base";
import { PromotionsImageService } from "./promotionsImage.service";
import { PromotionsImageController } from "./promotionsImage.controller";
import { PromotionsImageResolver } from "./promotionsImage.resolver";

@Module({
  imports: [PromotionsImageModuleBase],
  controllers: [PromotionsImageController],
  providers: [PromotionsImageService, PromotionsImageResolver],
  exports: [PromotionsImageService],
})
export class PromotionsImageModule {}
