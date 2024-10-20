export type Status = {
  id: number;
  status: string;
  count: number;
};

export type Statuses = {
  status_list: Status[];
}