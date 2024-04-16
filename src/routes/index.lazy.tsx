import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
// import DashboardBox from "@/components/DashboardBox";
import PendingRequestsList from "@/components/PendingRequestsList";
import StatisticsBox from "@/components/StatisticsBox";
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
    <div>
      <h1 className="pb-10 text-3xl font-bold">Overview</h1>
      <div className="grid gap-5 md:grid-cols-2 md:gap-10 ">
        <PendingRequestsList />
        <StatisticsBox />
      </div>
    </div>
  );
}
