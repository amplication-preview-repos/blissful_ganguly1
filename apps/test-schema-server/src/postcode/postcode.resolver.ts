import * as graphql from "@nestjs/graphql";
import { PostcodeResolverBase } from "./base/postcode.resolver.base";
import { Postcode } from "./base/Postcode";
import { PostcodeService } from "./postcode.service";

@graphql.Resolver(() => Postcode)
export class PostcodeResolver extends PostcodeResolverBase {
  constructor(protected readonly service: PostcodeService) {
    super(service);
  }
}
