import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../src/pages/main/Home/Home.tsx";
import Auth from "../src/pages/main/Auth/Auth.tsx";
import NotFound from "../src/pages/main/NotFound/NotFound.tsx";
import ProtectedRoute from "../src/pages/main/ProtectedRoute.tsx";

// Dashboard Pages
import Main from "../src/pages/dashboard/Main/Main";
import Articles from "../src/pages/dashboard/Articles/Articles";
import ArticleDetails from "../src/pages/dashboard/ArticleDetails/ArticleDetails";
import NewArticle from "../src/pages/dashboard/NewArticle/NewArticle";
import Schedule from "../src/pages/dashboard/Schedule/Schedule.tsx";
import DashboardWrapper from "../src/pages/dashboard/Wrapper/Wrapper";

// Profile Pages
import MyCategories from "../src/pages/profile/MyCategories/MyCategories";
import Details from "../src/pages/profile/Details/Details";
import Password from "../src/pages/profile/Password/Password";
import ProfileWrapper from "../src/pages/profile/ProfileWrapper/ProfileWrapper";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardWrapper />
          </ProtectedRoute>
        }
      >
        <Route index element={<Main />} />
        <Route path="articles" element={<Articles />} />
        <Route path="articles/:id" element={<ArticleDetails />} />
        <Route path="new-article" element={<NewArticle />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="profile" element={<ProfileWrapper />}>
          <Route path="categories" element={<MyCategories />} />
          <Route path="details" element={<Details />} />
          <Route path="password" element={<Password />} />
        </Route>
      </Route>
      <Route path="/landing" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
