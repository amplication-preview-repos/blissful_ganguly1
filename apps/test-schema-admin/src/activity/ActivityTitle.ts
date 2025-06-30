import { Activity as TActivity } from "../api/activity/Activity";

export const ACTIVITY_TITLE_FIELD = "linkName";

export const ActivityTitle = (record: TActivity): string => {
  return record.linkName?.toString() || String(record.id);
};
