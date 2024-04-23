import React from "react";
import {
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

type FolderCardProps = {
  name: string;
  category: string;
  isFavorite: boolean;
  onFavoriteChanged?: React.ChangeEvent;
};

function FolderCard(props: FolderCardProps) {
  const { name, category, isFavorite } = props;
  return (
    <Card variant={"outlined"} sx={{ height: 140, width: 300 }}>
      <CardContent>
        <Stack flexDirection={"column"} spacing={2}>
          <Stack
            flexDirection={"row"}
            // alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography sx={{ fontWeight: 500, fontSize: 20 }}>{name}</Typography>
            <IconButton size={"small"}>
              {isFavorite ? <FavoriteIcon color={"error"}/> : <FavoriteBorderIcon />}
            </IconButton>
          </Stack>
          <Chip
            size={"small"}
            label={category}
            sx={{ alignSelf: "flex-start" }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default FolderCard;