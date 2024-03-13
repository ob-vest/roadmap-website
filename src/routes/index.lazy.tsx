import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import DashboardBox from "@/components/DashboardBox";
export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authorizationToken");
    if (!token) {
      //   navigate({ to: "/login" });
    }
  }, [navigate]);
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <div className="grid gap-2 md:grid-cols-2 md:gap-10 ">
        <DashboardBox />
        <DashboardBox />
      </div>
    </div>
  );
}
