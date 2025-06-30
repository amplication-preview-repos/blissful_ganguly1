import { Module } from "@nestjs/common";
import { CategoriesImageModuleBase } from "./base/categoriesImage.module.base";
import { CategoriesImageService } from "./categoriesImage.service";
import { CategoriesImageController } from "./categoriesImage.controller";
import { CategoriesImageResolver } from "./categoriesImage.resolver";

@Module({
  imports: [CategoriesImageModuleBase],
  controllers: [CategoriesImageController],
  providers: [CategoriesImageService, CategoriesImageResolver],
  exports: [CategoriesImageService],
})
export class CategoriesImageModule {}
