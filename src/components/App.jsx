import { GlobalStyle } from './GlobalStyles';
import { Routes, Route } from "react-router-dom";
import { Main } from "../pages/Main";
import { News } from "../pages/News";
import { Profile } from "../pages/Profile";
import Header from './Header';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="news" element={<News />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
};
