import { FundraisersStatus as TFundraisersStatus } from "../api/fundraisersStatus/FundraisersStatus";

export const FUNDRAISERSSTATUS_TITLE_FIELD = "name";

export const FundraisersStatusTitle = (record: TFundraisersStatus): string => {
  return record.name?.toString() || String(record.id);
};
