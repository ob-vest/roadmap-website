import useUserInformation from "@/hooks/useUserInformation";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$userId")({
  component: () => UserPage(),
});

function UserPage() {
  const { userId } = Route.useParams();

  const { data: user } = useUserInformation(Number(userId));
  return <div>{user?.displayName}</div>;
}
