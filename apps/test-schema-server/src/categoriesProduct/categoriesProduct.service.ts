import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CategoriesProductServiceBase } from "./base/categoriesProduct.service.base";

@Injectable()
export class CategoriesProductService extends CategoriesProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
