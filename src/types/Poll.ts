import { Vote } from "./Vote";

export type Poll = {
  closes: number;
  id: number;
  open: boolean;
  options: Option[];
  question: string;
  result: number | null;
  votes?: Vote[];
};

export type Option = {
  count: number;
  id: number;
  option: string;
};
