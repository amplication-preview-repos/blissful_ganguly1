import * as graphql from "@nestjs/graphql";
import { FundraisersCustomerResolverBase } from "./base/fundraisersCustomer.resolver.base";
import { FundraisersCustomer } from "./base/FundraisersCustomer";
import { FundraisersCustomerService } from "./fundraisersCustomer.service";

@graphql.Resolver(() => FundraisersCustomer)
export class FundraisersCustomerResolver extends FundraisersCustomerResolverBase {
  constructor(protected readonly service: FundraisersCustomerService) {
    super(service);
  }
}
