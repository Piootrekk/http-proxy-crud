type TJsonable =
  | string
  | number
  | boolean
  | null
  | TJsonable[]
  | { [key: string]: TJsonable };

export type { TJsonable };
