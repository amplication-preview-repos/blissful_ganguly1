import { Api as TApi } from "./api/Api";

export const API_TITLE_FIELD = "subscriptionUuid";

export const ApiTitle = (record: TApi): string => {
  return record.subscriptionUuid?.toString() || String(record.id);
};
