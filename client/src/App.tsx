import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import NotLoginUser from "./privateRoutes/NotLoginUser";
import LoginUser from "./privateRoutes/LoginUser";
import CreatePost from "./components/Home/Post/CreatePost";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<NotLoginUser />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<LoginUser />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <CreatePost />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
