import { Module } from "@nestjs/common";
import { PostcodeModuleBase } from "./base/postcode.module.base";
import { PostcodeService } from "./postcode.service";
import { PostcodeController } from "./postcode.controller";
import { PostcodeResolver } from "./postcode.resolver";

@Module({
  imports: [PostcodeModuleBase],
  controllers: [PostcodeController],
  providers: [PostcodeService, PostcodeResolver],
  exports: [PostcodeService],
})
export class PostcodeModule {}
