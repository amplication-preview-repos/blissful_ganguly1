import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UsersImageService } from "./usersImage.service";
import { UsersImageControllerBase } from "./base/usersImage.controller.base";

@swagger.ApiTags("usersImages")
@common.Controller("usersImages")
export class UsersImageController extends UsersImageControllerBase {
  constructor(protected readonly service: UsersImageService) {
    super(service);
  }
}
