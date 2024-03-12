import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/requests")({
  component: () => <div>Hello /requests!</div>,
});
