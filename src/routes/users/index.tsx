import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users/")({
  component: () => UserListPage(),
});

function UserListPage() {
  return (
    <div>
      <h1>Users</h1>
      <div className="grid grid-cols-2 gap-3">
        <div className="w-full rounded-md border border-border text-left hover:border-primary">
          <h3>Test</h3>
        </div>

        <div className="w-full rounded-md border border-border text-left hover:border-primary">
          <div className="px-2 py-1">
            <div className="flex items-center gap-2">
              <p className="rounded-md bg-muted px-1 text-sm text-muted-foreground">
                53
              </p>
              <h3> welcome snake</h3>
            </div>

            <p className="text-sm opacity-50">Joined at: </p>
          </div>
        </div>
      </div>
    </div>
  );
}
