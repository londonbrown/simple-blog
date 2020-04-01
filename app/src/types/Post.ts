import * as quill from "quill";

export type PostData = {
  id?: string;
  title: string;
  createdAt?: number;
  content: string | quill.DeltaStatic;
  username?: string;
  tags?: Set<string> | undefined;
};
