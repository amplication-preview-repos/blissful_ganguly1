import { Module } from "@nestjs/common";
import { PromotionsProductModuleBase } from "./base/promotionsProduct.module.base";
import { PromotionsProductService } from "./promotionsProduct.service";
import { PromotionsProductController } from "./promotionsProduct.controller";
import { PromotionsProductResolver } from "./promotionsProduct.resolver";

@Module({
  imports: [PromotionsProductModuleBase],
  controllers: [PromotionsProductController],
  providers: [PromotionsProductService, PromotionsProductResolver],
  exports: [PromotionsProductService],
})
export class PromotionsProductModule {}
