import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostcodeService } from "./postcode.service";
import { PostcodeControllerBase } from "./base/postcode.controller.base";

@swagger.ApiTags("postcodes")
@common.Controller("postcodes")
export class PostcodeController extends PostcodeControllerBase {
  constructor(protected readonly service: PostcodeService) {
    super(service);
  }
}
