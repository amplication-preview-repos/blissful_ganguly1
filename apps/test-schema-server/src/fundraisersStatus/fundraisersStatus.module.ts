import { Module } from "@nestjs/common";
import { FundraisersStatusModuleBase } from "./base/fundraisersStatus.module.base";
import { FundraisersStatusService } from "./fundraisersStatus.service";
import { FundraisersStatusController } from "./fundraisersStatus.controller";
import { FundraisersStatusResolver } from "./fundraisersStatus.resolver";

@Module({
  imports: [FundraisersStatusModuleBase],
  controllers: [FundraisersStatusController],
  providers: [FundraisersStatusService, FundraisersStatusResolver],
  exports: [FundraisersStatusService],
})
export class FundraisersStatusModule {}
