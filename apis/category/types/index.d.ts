export type Category = {
  id: number;
  category: string;
  count: number;
};

export type Categories = {
  category_list: Category[];
}