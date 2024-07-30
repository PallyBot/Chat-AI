import { Conversation } from "../conversation/Conversation";

export type Message = {
  content: string | null;
  conversation?: Conversation | null;
  createdAt: Date;
  id: string;
  role: string | null;
  updatedAt: Date;
};
