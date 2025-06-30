import { Module } from "@nestjs/common";
import { UsersImageModuleBase } from "./base/usersImage.module.base";
import { UsersImageService } from "./usersImage.service";
import { UsersImageController } from "./usersImage.controller";
import { UsersImageResolver } from "./usersImage.resolver";

@Module({
  imports: [UsersImageModuleBase],
  controllers: [UsersImageController],
  providers: [UsersImageService, UsersImageResolver],
  exports: [UsersImageService],
})
export class UsersImageModule {}
