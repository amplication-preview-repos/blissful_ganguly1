import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OrdersStatusServiceBase } from "./base/ordersStatus.service.base";

@Injectable()
export class OrdersStatusService extends OrdersStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
