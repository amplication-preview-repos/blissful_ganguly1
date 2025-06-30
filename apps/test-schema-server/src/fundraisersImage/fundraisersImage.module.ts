import { Module } from "@nestjs/common";
import { FundraisersImageModuleBase } from "./base/fundraisersImage.module.base";
import { FundraisersImageService } from "./fundraisersImage.service";
import { FundraisersImageController } from "./fundraisersImage.controller";
import { FundraisersImageResolver } from "./fundraisersImage.resolver";

@Module({
  imports: [FundraisersImageModuleBase],
  controllers: [FundraisersImageController],
  providers: [FundraisersImageService, FundraisersImageResolver],
  exports: [FundraisersImageService],
})
export class FundraisersImageModule {}
