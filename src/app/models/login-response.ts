import { User } from "./user";

export interface LoginResponse {
  successful: boolean;
  result: string;
  user: User;
}