import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FundraisersCustomerServiceBase } from "./base/fundraisersCustomer.service.base";

@Injectable()
export class FundraisersCustomerService extends FundraisersCustomerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
