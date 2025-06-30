import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PostcodeServiceBase } from "./base/postcode.service.base";

@Injectable()
export class PostcodeService extends PostcodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
