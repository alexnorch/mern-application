import { Routes, Route } from "react-router-dom";
import { Home, Auth, NotFound, ProtectedRoute } from "./pages";
import { Main, Articles, ArticleDetails, NewArticle, Schedule, DashboardWrapper } from "./pages/dashboard";
import { MyCategories, Details, Password, ProfileWrapper } from "./pages/profile";

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
