export type Id = ReturnType<typeof crypto.randomUUID>;

export type Student = {
    name: string;
    id: string;
    deleted?: boolean;
}

export type Total = {
    totalCount: number;
    totalId: Id
  };