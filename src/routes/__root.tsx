import NavBar from "@/components/NavBar";
import { Separator } from "@/components/ui/separator";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export const Route = createRootRoute({
  component: () => (
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
  ),
});
