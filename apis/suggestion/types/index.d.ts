export type Category = {
  category_id: number;
  category: string;
};

export type Suggestion = {
  id: number;
  title: string;
  unknown: string;
  created_at: string;
  status_id: number;
  category_list: Category[];
};

export type Suggestions = {
  suggestion_list: Suggestion[];
};