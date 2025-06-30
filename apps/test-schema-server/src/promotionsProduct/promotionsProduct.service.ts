import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromotionsProductServiceBase } from "./base/promotionsProduct.service.base";

@Injectable()
export class PromotionsProductService extends PromotionsProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
