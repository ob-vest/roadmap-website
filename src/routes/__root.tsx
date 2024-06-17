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
import * as React from "react";

export const Route = createRootRoute({
  component: Root,
});

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import("@tanstack/react-query-devtools/build/modern/production.js").then(
    (d) => ({
      default: d.ReactQueryDevtools,
    }),
  ),
);

function Root() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  useEffect(() => {
    const token = localStorage.getItem("authorizationToken");
    if (!token && window.location.pathname !== "/login") {
      navigate({ to: "/login" });
    }
  }, [navigate, routerState.location]);
  const [showDevtools, setShowDevtools] = React.useState(true);

  React.useEffect(() => {
    // @ts-expect-error - this is a hack to expose the devtools to the window
    window.toggleDevtools = () => setShowDevtools((old) => !old);
  }, []);

  return (
    <>
      <NavBar />
      <Separator className="mb-10 mt-2" />
      <Outlet />
      <TanStackRouterDevtools />
      <ReactQueryDevtools initialIsOpen />
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </>
  );
}
