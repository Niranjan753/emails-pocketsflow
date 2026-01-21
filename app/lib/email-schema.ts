export type BlockType = "text" | "image" | "button";

export type Block = {
  id: string;
  type: BlockType;
  props: Record<string, any>;
};

export type Column = {
  id: string;
  blocks: Block[];
};

export type Section = {
  id: string;
  columns: Column[];
};

export type EmailTemplate = {
  sections: Section[];
};
