import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import image from "../images/news-paper.jpg";
import { Link } from "react-router-dom";

export const Main = () => {

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: "column", padding: "120px 0 40px 0" }}>
            <CardMedia
              sx={{ width: 800, height: 400, borderRadius: 2 }}
              image={image}
              title="User image"
            >
                <Box sx={{ paddingTop: '200px', display: 'flex', justifyContent: 'center' }}>
                    <Link to="/news" style={{textDecoration: 'none'}}>
                        <Button variant="contained" size="large">Read the latest news</Button>
                    </Link>
                </Box>
            </CardMedia>
        </Box>
    )
}