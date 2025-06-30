import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsersImageServiceBase } from "./base/usersImage.service.base";

@Injectable()
export class UsersImageService extends UsersImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
