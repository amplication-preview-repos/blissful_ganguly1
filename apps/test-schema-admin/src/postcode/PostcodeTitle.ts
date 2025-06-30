import { Postcode as TPostcode } from "../api/postcode/Postcode";

export const POSTCODE_TITLE_FIELD = "code";

export const PostcodeTitle = (record: TPostcode): string => {
  return record.code?.toString() || String(record.id);
};
