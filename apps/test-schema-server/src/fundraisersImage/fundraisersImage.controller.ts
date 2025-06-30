import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FundraisersImageService } from "./fundraisersImage.service";
import { FundraisersImageControllerBase } from "./base/fundraisersImage.controller.base";

@swagger.ApiTags("fundraisersImages")
@common.Controller("fundraisersImages")
export class FundraisersImageController extends FundraisersImageControllerBase {
  constructor(protected readonly service: FundraisersImageService) {
    super(service);
  }
}
