import useUsers from "@/hooks/useUsers";
import { createFileRoute } from "@tanstack/react-router";
import { IUserListItem } from "@/hooks/useUsers";
import { distanceFromDate } from "@/utils/dateUtils";
import { SquarePen, MessageSquare } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/users/")({
  component: () => UserListPage(),
});

function UserListPage() {
  const { data: users } = useUsers();
  return (
    <div>
      <h1 className="mb-5">Users</h1>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {users.map((userListItem: IUserListItem) => (
          <Link
            to={`/users/${userListItem.id}`}
            className="w-full rounded-md border border-border text-left hover:border-primary"
            key={userListItem.id}
          >
            <div className="px-2 py-1">
              <div className="flex items-center gap-3">
                <p className="rounded-md bg-muted px-1 text-sm text-muted-foreground">
                  {userListItem.id}
                </p>
                <h3>{userListItem.displayName}</h3>
              </div>

              <p className="text-sm opacity-50">
                Joined: {distanceFromDate(userListItem.createdAt)}
              </p>
            </div>
            <div className="flex justify-start gap-4 px-2 pb-1">
              <div className="flex items-center gap-1">
                <SquarePen className="h-5 text-sm text-muted-foreground" />
                <p>{userListItem.requestCount}</p>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-5 text-sm text-muted-foreground" />
                <p>{userListItem.commentCount}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
