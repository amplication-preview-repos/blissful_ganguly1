import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FundraisersProductServiceBase } from "./base/fundraisersProduct.service.base";

@Injectable()
export class FundraisersProductService extends FundraisersProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
