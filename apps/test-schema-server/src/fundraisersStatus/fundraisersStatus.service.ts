import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FundraisersStatusServiceBase } from "./base/fundraisersStatus.service.base";

@Injectable()
export class FundraisersStatusService extends FundraisersStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
