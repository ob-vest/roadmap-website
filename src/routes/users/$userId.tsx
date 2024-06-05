import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/$userId")({
  component: () => UserPage(),
});

function UserPage() {
  return <div>UserPage</div>;
}
