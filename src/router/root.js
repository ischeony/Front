import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Login = lazy(() => import("../pages/Auth/LoginPage"));
const Join = lazy(() => import("../pages/Auth/JoinPage"));
const MyPage = lazy(() => import("../pages/MyPage/MyPage"));
const ResetPasswordPage = lazy(() => import("../pages/Auth/ResetPasswordPage"));

const root = createBrowserRouter([
  {
    path: "/users/login",
    element: <Login />, // 로그인 페이지
  },
  {
    path: "/users/join",
    element: <Join />, // 회원가입 페이지
  },
  {
    path: "/users/mypage",
    element: <MyPage />, // 마이 페이지 (회원정보 수정 등)
  },
  {
    path: "/users/update", // 비밀번호 재설정 경로
    element: <ResetPasswordPage />, // ResetPasswordPage 컴포넌트 렌더링
  },
]);

export default root;
