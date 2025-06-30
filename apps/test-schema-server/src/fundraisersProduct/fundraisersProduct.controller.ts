import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FundraisersProductService } from "./fundraisersProduct.service";
import { FundraisersProductControllerBase } from "./base/fundraisersProduct.controller.base";

@swagger.ApiTags("fundraisersProducts")
@common.Controller("fundraisersProducts")
export class FundraisersProductController extends FundraisersProductControllerBase {
  constructor(protected readonly service: FundraisersProductService) {
    super(service);
  }
}
