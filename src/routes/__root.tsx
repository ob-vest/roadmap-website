import NavBar from "@/components/NavBar";
import { Separator } from "@/components/ui/separator";
import {
  createRootRoute,
  Outlet,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  useEffect(() => {
    const location = routerState.location;
    const token = localStorage.getItem("authorizationToken");
    if (!token && window.location.pathname !== "/login") {
      navigate({ to: "/login" });
    }
  }, [navigate, location]);
  return (
    <>
      <NavBar />
      {/* <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/about" className="[&.active]:font-bold">
        About
      </Link>
    </div> */}
      <Separator className="mb-10 mt-2" />
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools />
    </>
  );
}
