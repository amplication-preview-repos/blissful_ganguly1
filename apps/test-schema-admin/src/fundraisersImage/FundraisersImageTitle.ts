import { FundraisersImage as TFundraisersImage } from "../api/fundraisersImage/FundraisersImage";

export const FUNDRAISERSIMAGE_TITLE_FIELD = "name";

export const FundraisersImageTitle = (record: TFundraisersImage): string => {
  return record.name?.toString() || String(record.id);
};
