import useUsers from "@/hooks/useUsers";
import { createFileRoute } from "@tanstack/react-router";
import { IUserListItem } from "@/hooks/useUsers";
import { distanceFromDate } from "@/utils/dateUtils";
import { SquarePen, MessageSquare } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PaginationBar } from "@/components/Pagination";
import { useState } from "react";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export const Route = createFileRoute("/users/")({
  component: () => UserListPage(),
});

function UserListPage() {
  const limit = 15;
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading } = useUsers(currentPage, limit);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <section>
      <h1 className="mb-5">Users</h1>
      {isLoading && (
        <div className="flex flex-col items-center justify-center gap-3">
          <LoadingSpinner size={50} className="text-primary" />
          <p>Loading...</p>
        </div>
      )}
      {data !== undefined && (
        <div>
          <div className="mb-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {data.users.map((userListItem: IUserListItem) => (
              <Link
                to="/users/$userId"
                params={{ userId: userListItem.id.toString() }}
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
          <PaginationBar
            currentPage={currentPage}
            totalPages={Math.ceil(data.total / limit)}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </section>
  );
}
