import * as graphql from "@nestjs/graphql";
import { UsersImageResolverBase } from "./base/usersImage.resolver.base";
import { UsersImage } from "./base/UsersImage";
import { UsersImageService } from "./usersImage.service";

@graphql.Resolver(() => UsersImage)
export class UsersImageResolver extends UsersImageResolverBase {
  constructor(protected readonly service: UsersImageService) {
    super(service);
  }
}
