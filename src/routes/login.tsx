import { createFileRoute } from "@tanstack/react-router";
import Login from "@/components/Login";

export const Route = createFileRoute("/login")({
  component: () => LoginPage(),
});

function LoginPage() {
  return (
    <div className="space-y-10 text-center mt-10">
      <h2>Login with Apple</h2>
      <Login />
    </div>
  );
}
