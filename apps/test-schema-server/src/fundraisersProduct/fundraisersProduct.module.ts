import { Module } from "@nestjs/common";
import { FundraisersProductModuleBase } from "./base/fundraisersProduct.module.base";
import { FundraisersProductService } from "./fundraisersProduct.service";
import { FundraisersProductController } from "./fundraisersProduct.controller";
import { FundraisersProductResolver } from "./fundraisersProduct.resolver";

@Module({
  imports: [FundraisersProductModuleBase],
  controllers: [FundraisersProductController],
  providers: [FundraisersProductService, FundraisersProductResolver],
  exports: [FundraisersProductService],
})
export class FundraisersProductModule {}
