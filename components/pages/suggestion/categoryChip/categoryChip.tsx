import { Category } from "@/apis/suggestion/types";
import { Chip } from "@mui/material";

export default function CategoryChip({ category }: { category: Category }) {
  return (
    <Chip
      key={category.category_id}
      label={category.category}
      size="small"
      className="mr-2 mt-2"
      sx={{ width: "80px", color: "gray" }}
    />
  );
}