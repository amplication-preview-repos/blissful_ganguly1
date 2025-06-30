import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FundraisersStatusService } from "./fundraisersStatus.service";
import { FundraisersStatusControllerBase } from "./base/fundraisersStatus.controller.base";

@swagger.ApiTags("fundraisersStatuses")
@common.Controller("fundraisersStatuses")
export class FundraisersStatusController extends FundraisersStatusControllerBase {
  constructor(protected readonly service: FundraisersStatusService) {
    super(service);
  }
}
