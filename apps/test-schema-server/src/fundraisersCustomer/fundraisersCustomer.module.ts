import { Module } from "@nestjs/common";
import { FundraisersCustomerModuleBase } from "./base/fundraisersCustomer.module.base";
import { FundraisersCustomerService } from "./fundraisersCustomer.service";
import { FundraisersCustomerController } from "./fundraisersCustomer.controller";
import { FundraisersCustomerResolver } from "./fundraisersCustomer.resolver";

@Module({
  imports: [FundraisersCustomerModuleBase],
  controllers: [FundraisersCustomerController],
  providers: [FundraisersCustomerService, FundraisersCustomerResolver],
  exports: [FundraisersCustomerService],
})
export class FundraisersCustomerModule {}
