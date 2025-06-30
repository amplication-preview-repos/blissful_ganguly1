import { Module } from "@nestjs/common";
import { CategoriesProductModuleBase } from "./base/categoriesProduct.module.base";
import { CategoriesProductService } from "./categoriesProduct.service";
import { CategoriesProductController } from "./categoriesProduct.controller";
import { CategoriesProductResolver } from "./categoriesProduct.resolver";

@Module({
  imports: [CategoriesProductModuleBase],
  controllers: [CategoriesProductController],
  providers: [CategoriesProductService, CategoriesProductResolver],
  exports: [CategoriesProductService],
})
export class CategoriesProductModule {}
