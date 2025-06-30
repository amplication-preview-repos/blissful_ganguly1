import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FundraisersCustomerService } from "./fundraisersCustomer.service";
import { FundraisersCustomerControllerBase } from "./base/fundraisersCustomer.controller.base";

@swagger.ApiTags("fundraisersCustomers")
@common.Controller("fundraisersCustomers")
export class FundraisersCustomerController extends FundraisersCustomerControllerBase {
  constructor(protected readonly service: FundraisersCustomerService) {
    super(service);
  }
}
