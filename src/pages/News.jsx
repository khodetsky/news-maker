import { useState, useEffect } from 'react';
import { Loader } from "../components/Loader";
import { getNewsData, getNewsImages } from "../components/Api";

export const News = () => {
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        getNewsData(page).then(r => console.log(r));
        getNewsImages(page).then(r => console.log(r));

    }, [page])

    return (
        <>
            {status === "loading" && (<Loader />)}
        </>
    )
}