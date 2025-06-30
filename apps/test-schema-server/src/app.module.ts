import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { UserRoleModule } from "./userRole/userRole.module";
import { RoleModule } from "./role/role.module";
import { NotificationModule } from "./notification/notification.module";
import { MessageModule } from "./message/message.module";
import { OrderModule } from "./order/order.module";
import { OrdersProductModule } from "./ordersProduct/ordersProduct.module";
import { OrdersStatusModule } from "./ordersStatus/ordersStatus.module";
import { CategoryModule } from "./category/category.module";
import { CategoriesProductModule } from "./categoriesProduct/categoriesProduct.module";
import { CategoriesImageModule } from "./categoriesImage/categoriesImage.module";
import { FundraiserModule } from "./fundraiser/fundraiser.module";
import { FundraisersCustomerModule } from "./fundraisersCustomer/fundraisersCustomer.module";
import { FundraisersProductModule } from "./fundraisersProduct/fundraisersProduct.module";
import { FundraisersImageModule } from "./fundraisersImage/fundraisersImage.module";
import { FundraisersStatusModule } from "./fundraisersStatus/fundraisersStatus.module";
import { FundraisersPromotionModule } from "./fundraisersPromotion/fundraisersPromotion.module";
import { ProductModule } from "./product/product.module";
import { PromotionModule } from "./promotion/promotion.module";
import { PromotionsProductModule } from "./promotionsProduct/promotionsProduct.module";
import { PromotionsImageModule } from "./promotionsImage/promotionsImage.module";
import { ActivityModule } from "./activity/activity.module";
import { InboxModule } from "./inbox/inbox.module";
import { ApiModule } from "./api/api.module";
import { SubscriptionModule } from "./subscription/subscription.module";
import { TopicModule } from "./topic/topic.module";
import { UsersImageModule } from "./usersImage/usersImage.module";
import { PostcodeModule } from "./postcode/postcode.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    UserModule,
    UserRoleModule,
    RoleModule,
    NotificationModule,
    MessageModule,
    OrderModule,
    OrdersProductModule,
    OrdersStatusModule,
    CategoryModule,
    CategoriesProductModule,
    CategoriesImageModule,
    FundraiserModule,
    FundraisersCustomerModule,
    FundraisersProductModule,
    FundraisersImageModule,
    FundraisersStatusModule,
    FundraisersPromotionModule,
    ProductModule,
    PromotionModule,
    PromotionsProductModule,
    PromotionsImageModule,
    ActivityModule,
    InboxModule,
    ApiModule,
    SubscriptionModule,
    TopicModule,
    UsersImageModule,
    PostcodeModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
