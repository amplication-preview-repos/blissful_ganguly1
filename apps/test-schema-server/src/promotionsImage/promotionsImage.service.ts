import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PromotionsImageServiceBase } from "./base/promotionsImage.service.base";

@Injectable()
export class PromotionsImageService extends PromotionsImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
