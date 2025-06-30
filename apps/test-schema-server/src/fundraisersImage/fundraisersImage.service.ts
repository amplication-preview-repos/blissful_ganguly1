import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FundraisersImageServiceBase } from "./base/fundraisersImage.service.base";

@Injectable()
export class FundraisersImageService extends FundraisersImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
