import * as React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNewsData } from "../redux/newsSlice";
import { useTranslation } from 'react-i18next';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function PostCard({postId, image, title, description}) {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    function handleDeleteBtnClick() {
        dispatch(deleteNewsData(postId));
    }

  return (
    <Card sx={{ maxWidth: 345, height: 410, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDeleteBtnClick}>{t("delete")}</Button>
      </CardActions>
    </Card>
  );
}