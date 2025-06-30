import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FundraisersPromotionServiceBase } from "./base/fundraisersPromotion.service.base";

@Injectable()
export class FundraisersPromotionService extends FundraisersPromotionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
