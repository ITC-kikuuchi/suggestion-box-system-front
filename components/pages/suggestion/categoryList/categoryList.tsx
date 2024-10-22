import { Categories } from "@/apis/category/types";
import { Box, Card, CardContent, Typography, List, ListItemText, Badge, ListItemButton } from "@mui/material";

export default function CategoryList({ categories, onSelectCategory }: { categories: Categories, onSelectCategory: (categoryId: number) => void }) {
  return (
    <Box className="w-[180px]">
      <Card>
        <CardContent >
          <Typography variant="h6" component="div" gutterBottom>
            カテゴリ
          </Typography>
          <ListItemButton onClick={() => onSelectCategory(null)}>
            <ListItemText primary="全て" />
          </ListItemButton>
          <List disablePadding>
            {categories.category_list.map((category, index) => (
              <ListItemButton key={index} component="li" className="pr-4" onClick={() => onSelectCategory(category.id)}>
                <ListItemText primary={category.category} />
                <Badge badgeContent={category.count} color="primary" />
              </ListItemButton>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
