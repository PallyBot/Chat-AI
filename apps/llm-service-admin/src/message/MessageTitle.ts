import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "role";

export const MessageTitle = (record: TMessage): string => {
  return record.role?.toString() || String(record.id);
};
