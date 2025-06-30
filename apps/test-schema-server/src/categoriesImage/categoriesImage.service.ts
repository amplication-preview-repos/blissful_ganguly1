import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CategoriesImageServiceBase } from "./base/categoriesImage.service.base";

@Injectable()
export class CategoriesImageService extends CategoriesImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
