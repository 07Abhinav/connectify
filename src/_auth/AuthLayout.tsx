import { useUserContext } from "@/context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ): (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          {/* <img
          <img
            src="/public/assets/images/logo.svg"
            alt="logo"
            className="hidden xl:block h-screen w-20 object-cover bg-no-repeat"
          /> */}
        </>
      )}
    </>
  )
}

export default AuthLayout
