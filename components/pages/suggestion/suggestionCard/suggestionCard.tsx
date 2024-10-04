import { Suggestion } from "@/apis/suggestion/types";
import { Card, CardContent, CardActionArea, Typography, Chip } from "@mui/material";
import CategoryChip from "../categoryChip/categoryChip";

export default function SuggestionCard({ suggestion }: { suggestion: Suggestion }) {
  const statusLabel = suggestion.status_id === 1 ? "未解決" : "解決";
  const statusColor = suggestion.status_id === 1 ? "blue" : "red";

  return (
    <Card sx={{ maxWidth: 800, width: "100%", marginBottom: 4 }}>
      <CardActionArea>
        <CardContent>
          <div className="flex">
            <Typography component="span" sx={{ fontSize: "14px" }}>
              {suggestion.unknown}
            </Typography>
            <Typography
              variant="body2"
              component="span"
              sx={{ color: "text.secondary", ml: 1, fontSize: "14px" }}
            >
              {suggestion.created_at}
            </Typography>
          </div>
          <Typography variant="h5" className="mt-2" sx={{ fontWeight: "bold" }}>
            {suggestion.title}
          </Typography>
          <Chip
            label={statusLabel}
            size="small"
            className="mr-2 mt-2"
            sx={{
              width: "80px",
              color: "white",
              backgroundColor: statusColor,
            }}
          />
          {suggestion.category_list.map(category => (
            <CategoryChip category={category} key={category.category_id} />
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
