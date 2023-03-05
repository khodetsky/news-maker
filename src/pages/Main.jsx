import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import image from "../images/news-paper.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const Main = () => {
const { t } = useTranslation();

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: "column", padding: "120px 0 40px 0" }}>
            <CardMedia
              sx={{ width: 800, height: 400, borderRadius: 2 }}
              image={image}
              title="User image"
            >
                <Box sx={{ paddingTop: '200px', display: 'flex', justifyContent: 'center' }}>
                    <Link to="/news" style={{textDecoration: 'none'}}>
                        <Button variant="contained" size="large">{t("read")}</Button>
                    </Link>
                </Box>
            </CardMedia>
        </Box>
    )
}