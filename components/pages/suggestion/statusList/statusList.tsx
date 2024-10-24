import { Statuses } from "@/apis/status/types";
import { Box, Card, CardContent, Typography, List, ListItemText, Badge, ListItemButton } from "@mui/material";

export default function StatusList({ statuses, onSelectStatus }: { statuses: Statuses, onSelectStatus: (statusId: number | null) => void }) {
  return (
    <Box className="w-[180px] mt-4">
      <Card>
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            ステータス
          </Typography>
          <ListItemButton onClick={() => onSelectStatus(null)}>
            <ListItemText primary="全て" />
          </ListItemButton>
          <List disablePadding>
            {statuses.status_list.map((status, index) => (
              <ListItemButton key={index} component="li" className="pr-4" onClick={() => onSelectStatus(status.id)}>
                <ListItemText primary={status.status} />
                <Badge badgeContent={status.count} color="primary" />
              </ListItemButton>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};
