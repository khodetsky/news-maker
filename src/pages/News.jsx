import { useState, useEffect } from 'react';
import { Loader } from "../components/Loader";
import { getNewsData, getNewsImages } from "../components/Api";
import { addNewsImages, addNewsData } from "../redux/newsSlice";
import { useDispatch, useSelector } from 'react-redux';
import { getNewsSelector, getImagesSelector } from "../redux/selectors";
import { PostCard } from "../components/PostCard";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const News = () => {
    const dispatch = useDispatch();
    const newsData = useSelector(getNewsSelector);
    const newsImages = useSelector(getImagesSelector);

    const [page, setPage] = useState(1);
    const [status, setStatus] = useState("loading");


    useEffect(() => {
        if (newsImages.length > 0 && newsData.length > 0) {
            setStatus('done')
        }
        if (page !== 1) {
                window.scrollBy({
                  top: 400,
                  behavior: "smooth",
                })
        }
    }, [newsData, newsImages, page])

    useEffect(() => {
        getNewsData(page).then(r => dispatch(addNewsData(r)));
        getNewsImages(page).then(r => dispatch(addNewsImages(r)));
    }, [page, dispatch])

    const onLoadMoreBtnClick = () => {
        setPage(prevState => (prevState + 1));
    }

    return (
        <>
            {status === "done" && (
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: "column", padding: "120px 0 40px 0"}}>
                    <Box
                        sx={{
                          display: 'grid',
                          gap: 3,
                          gridTemplateColumns: 'repeat(3, 1fr)',
                        }}
                    >
                        {newsData.map((post) => (
                            <div key={post.id}>
                                <PostCard
                                    postId={post.id}
                                    image={newsImages[post.id - 1].webformatURL}
                                    title={post.title}
                                    description={post.body}
                                />
                            </div>
                        ))}
                    </Box>
                    {page < 9 &&
                        <Box sx={{ paddingTop: '40px' }}>
                            <Button variant="contained" onClick={onLoadMoreBtnClick}>
                                Load more
                            </Button>
                        </Box>
                    }
                </Box>
            )}
            {status === "loading" && (<Loader />)}
        </>
    )
}