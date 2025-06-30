import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UserRoleList } from "./userRole/UserRoleList";
import { UserRoleCreate } from "./userRole/UserRoleCreate";
import { UserRoleEdit } from "./userRole/UserRoleEdit";
import { UserRoleShow } from "./userRole/UserRoleShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { OrdersProductList } from "./ordersProduct/OrdersProductList";
import { OrdersProductCreate } from "./ordersProduct/OrdersProductCreate";
import { OrdersProductEdit } from "./ordersProduct/OrdersProductEdit";
import { OrdersProductShow } from "./ordersProduct/OrdersProductShow";
import { OrdersStatusList } from "./ordersStatus/OrdersStatusList";
import { OrdersStatusCreate } from "./ordersStatus/OrdersStatusCreate";
import { OrdersStatusEdit } from "./ordersStatus/OrdersStatusEdit";
import { OrdersStatusShow } from "./ordersStatus/OrdersStatusShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { CategoriesProductList } from "./categoriesProduct/CategoriesProductList";
import { CategoriesProductCreate } from "./categoriesProduct/CategoriesProductCreate";
import { CategoriesProductEdit } from "./categoriesProduct/CategoriesProductEdit";
import { CategoriesProductShow } from "./categoriesProduct/CategoriesProductShow";
import { CategoriesImageList } from "./categoriesImage/CategoriesImageList";
import { CategoriesImageCreate } from "./categoriesImage/CategoriesImageCreate";
import { CategoriesImageEdit } from "./categoriesImage/CategoriesImageEdit";
import { CategoriesImageShow } from "./categoriesImage/CategoriesImageShow";
import { FundraiserList } from "./fundraiser/FundraiserList";
import { FundraiserCreate } from "./fundraiser/FundraiserCreate";
import { FundraiserEdit } from "./fundraiser/FundraiserEdit";
import { FundraiserShow } from "./fundraiser/FundraiserShow";
import { FundraisersCustomerList } from "./fundraisersCustomer/FundraisersCustomerList";
import { FundraisersCustomerCreate } from "./fundraisersCustomer/FundraisersCustomerCreate";
import { FundraisersCustomerEdit } from "./fundraisersCustomer/FundraisersCustomerEdit";
import { FundraisersCustomerShow } from "./fundraisersCustomer/FundraisersCustomerShow";
import { FundraisersProductList } from "./fundraisersProduct/FundraisersProductList";
import { FundraisersProductCreate } from "./fundraisersProduct/FundraisersProductCreate";
import { FundraisersProductEdit } from "./fundraisersProduct/FundraisersProductEdit";
import { FundraisersProductShow } from "./fundraisersProduct/FundraisersProductShow";
import { FundraisersImageList } from "./fundraisersImage/FundraisersImageList";
import { FundraisersImageCreate } from "./fundraisersImage/FundraisersImageCreate";
import { FundraisersImageEdit } from "./fundraisersImage/FundraisersImageEdit";
import { FundraisersImageShow } from "./fundraisersImage/FundraisersImageShow";
import { FundraisersStatusList } from "./fundraisersStatus/FundraisersStatusList";
import { FundraisersStatusCreate } from "./fundraisersStatus/FundraisersStatusCreate";
import { FundraisersStatusEdit } from "./fundraisersStatus/FundraisersStatusEdit";
import { FundraisersStatusShow } from "./fundraisersStatus/FundraisersStatusShow";
import { FundraisersPromotionList } from "./fundraisersPromotion/FundraisersPromotionList";
import { FundraisersPromotionCreate } from "./fundraisersPromotion/FundraisersPromotionCreate";
import { FundraisersPromotionEdit } from "./fundraisersPromotion/FundraisersPromotionEdit";
import { FundraisersPromotionShow } from "./fundraisersPromotion/FundraisersPromotionShow";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { PromotionList } from "./promotion/PromotionList";
import { PromotionCreate } from "./promotion/PromotionCreate";
import { PromotionEdit } from "./promotion/PromotionEdit";
import { PromotionShow } from "./promotion/PromotionShow";
import { PromotionsProductList } from "./promotionsProduct/PromotionsProductList";
import { PromotionsProductCreate } from "./promotionsProduct/PromotionsProductCreate";
import { PromotionsProductEdit } from "./promotionsProduct/PromotionsProductEdit";
import { PromotionsProductShow } from "./promotionsProduct/PromotionsProductShow";
import { PromotionsImageList } from "./promotionsImage/PromotionsImageList";
import { PromotionsImageCreate } from "./promotionsImage/PromotionsImageCreate";
import { PromotionsImageEdit } from "./promotionsImage/PromotionsImageEdit";
import { PromotionsImageShow } from "./promotionsImage/PromotionsImageShow";
import { ActivityList } from "./activity/ActivityList";
import { ActivityCreate } from "./activity/ActivityCreate";
import { ActivityEdit } from "./activity/ActivityEdit";
import { ActivityShow } from "./activity/ActivityShow";
import { InboxList } from "./inbox/InboxList";
import { InboxCreate } from "./inbox/InboxCreate";
import { InboxEdit } from "./inbox/InboxEdit";
import { InboxShow } from "./inbox/InboxShow";
import { ApiList } from "./api/ApiList";
import { ApiCreate } from "./api/ApiCreate";
import { ApiEdit } from "./api/ApiEdit";
import { ApiShow } from "./api/ApiShow";
import { SubscriptionList } from "./subscription/SubscriptionList";
import { SubscriptionCreate } from "./subscription/SubscriptionCreate";
import { SubscriptionEdit } from "./subscription/SubscriptionEdit";
import { SubscriptionShow } from "./subscription/SubscriptionShow";
import { TopicList } from "./topic/TopicList";
import { TopicCreate } from "./topic/TopicCreate";
import { TopicEdit } from "./topic/TopicEdit";
import { TopicShow } from "./topic/TopicShow";
import { UsersImageList } from "./usersImage/UsersImageList";
import { UsersImageCreate } from "./usersImage/UsersImageCreate";
import { UsersImageEdit } from "./usersImage/UsersImageEdit";
import { UsersImageShow } from "./usersImage/UsersImageShow";
import { PostcodeList } from "./postcode/PostcodeList";
import { PostcodeCreate } from "./postcode/PostcodeCreate";
import { PostcodeEdit } from "./postcode/PostcodeEdit";
import { PostcodeShow } from "./postcode/PostcodeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Test Schema"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UserRole"
          list={UserRoleList}
          edit={UserRoleEdit}
          create={UserRoleCreate}
          show={UserRoleShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="OrdersProduct"
          list={OrdersProductList}
          edit={OrdersProductEdit}
          create={OrdersProductCreate}
          show={OrdersProductShow}
        />
        <Resource
          name="OrdersStatus"
          list={OrdersStatusList}
          edit={OrdersStatusEdit}
          create={OrdersStatusCreate}
          show={OrdersStatusShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="CategoriesProduct"
          list={CategoriesProductList}
          edit={CategoriesProductEdit}
          create={CategoriesProductCreate}
          show={CategoriesProductShow}
        />
        <Resource
          name="CategoriesImage"
          list={CategoriesImageList}
          edit={CategoriesImageEdit}
          create={CategoriesImageCreate}
          show={CategoriesImageShow}
        />
        <Resource
          name="Fundraiser"
          list={FundraiserList}
          edit={FundraiserEdit}
          create={FundraiserCreate}
          show={FundraiserShow}
        />
        <Resource
          name="FundraisersCustomer"
          list={FundraisersCustomerList}
          edit={FundraisersCustomerEdit}
          create={FundraisersCustomerCreate}
          show={FundraisersCustomerShow}
        />
        <Resource
          name="FundraisersProduct"
          list={FundraisersProductList}
          edit={FundraisersProductEdit}
          create={FundraisersProductCreate}
          show={FundraisersProductShow}
        />
        <Resource
          name="FundraisersImage"
          list={FundraisersImageList}
          edit={FundraisersImageEdit}
          create={FundraisersImageCreate}
          show={FundraisersImageShow}
        />
        <Resource
          name="FundraisersStatus"
          list={FundraisersStatusList}
          edit={FundraisersStatusEdit}
          create={FundraisersStatusCreate}
          show={FundraisersStatusShow}
        />
        <Resource
          name="FundraisersPromotion"
          list={FundraisersPromotionList}
          edit={FundraisersPromotionEdit}
          create={FundraisersPromotionCreate}
          show={FundraisersPromotionShow}
        />
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Promotion"
          list={PromotionList}
          edit={PromotionEdit}
          create={PromotionCreate}
          show={PromotionShow}
        />
        <Resource
          name="PromotionsProduct"
          list={PromotionsProductList}
          edit={PromotionsProductEdit}
          create={PromotionsProductCreate}
          show={PromotionsProductShow}
        />
        <Resource
          name="PromotionsImage"
          list={PromotionsImageList}
          edit={PromotionsImageEdit}
          create={PromotionsImageCreate}
          show={PromotionsImageShow}
        />
        <Resource
          name="Activity"
          list={ActivityList}
          edit={ActivityEdit}
          create={ActivityCreate}
          show={ActivityShow}
        />
        <Resource
          name="Inbox"
          list={InboxList}
          edit={InboxEdit}
          create={InboxCreate}
          show={InboxShow}
        />
        <Resource
          name="Api"
          list={ApiList}
          edit={ApiEdit}
          create={ApiCreate}
          show={ApiShow}
        />
        <Resource
          name="Subscription"
          list={SubscriptionList}
          edit={SubscriptionEdit}
          create={SubscriptionCreate}
          show={SubscriptionShow}
        />
        <Resource
          name="Topic"
          list={TopicList}
          edit={TopicEdit}
          create={TopicCreate}
          show={TopicShow}
        />
        <Resource
          name="UsersImage"
          list={UsersImageList}
          edit={UsersImageEdit}
          create={UsersImageCreate}
          show={UsersImageShow}
        />
        <Resource
          name="Postcode"
          list={PostcodeList}
          edit={PostcodeEdit}
          create={PostcodeCreate}
          show={PostcodeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
