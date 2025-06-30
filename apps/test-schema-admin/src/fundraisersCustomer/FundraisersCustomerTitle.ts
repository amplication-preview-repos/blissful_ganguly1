import { FundraisersCustomer as TFundraisersCustomer } from "../api/fundraisersCustomer/FundraisersCustomer";

export const FUNDRAISERSCUSTOMER_TITLE_FIELD = "id";

export const FundraisersCustomerTitle = (
  record: TFundraisersCustomer
): string => {
  return record.id?.toString() || String(record.id);
};
