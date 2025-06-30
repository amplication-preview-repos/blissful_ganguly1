import * as graphql from "@nestjs/graphql";
import { FundraisersStatusResolverBase } from "./base/fundraisersStatus.resolver.base";
import { FundraisersStatus } from "./base/FundraisersStatus";
import { FundraisersStatusService } from "./fundraisersStatus.service";

@graphql.Resolver(() => FundraisersStatus)
export class FundraisersStatusResolver extends FundraisersStatusResolverBase {
  constructor(protected readonly service: FundraisersStatusService) {
    super(service);
  }
}
