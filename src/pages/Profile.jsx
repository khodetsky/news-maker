import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserStatus } from "../redux/selectors";

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import image from "../images/user.jpg";
import Typography from '@mui/material/Typography';

export const Profile = () => {
    const isSignIn = useSelector(getUserStatus);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignIn) {
            navigate("/", { replace: true })
        }
    }, [isSignIn, navigate])

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: "column", padding: "120px 0 40px 0" }}>
            <CardMedia
              sx={{ width: 256, height: 256 }}
              image={image}
              title="User image"
            />
            <Typography gutterBottom variant="h5" component="div" sx={{marginTop: 2}}>
              There may be more information about the user
            </Typography>
        </Box>
    )
}