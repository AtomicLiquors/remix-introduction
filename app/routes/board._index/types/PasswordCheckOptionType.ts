
export const PWCheckOption = {
  ViewDetail: "viewDetail",
  Delete: "delete",
  Edit: "edit",
  None: "none",
} as const;

export type PWCheckOptionType =
  (typeof PWCheckOption)[keyof typeof PWCheckOption];
