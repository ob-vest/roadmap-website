import useUserInformation from "@/hooks/useUserInformation";
import { Link, createFileRoute } from "@tanstack/react-router";
import { distanceFromDate } from "@/utils/dateUtils";
import RequestCard from "@/components/RequestCard";
import { Check, X } from "lucide-react";

export const Route = createFileRoute("/users/$userId")({
  component: () => UserPage(),
});

function UserPage() {
  const { userId } = Route.useParams();

  const { data: user } = useUserInformation(Number(userId));
  return (
    <section>
      <h1 className="mb-5">User page</h1>
      {user !== undefined && (
        <div>
          <div className="flex flex-col items-start gap-2 rounded-lg border border-muted p-2">
            <h2 className="mx-auto">
              <span className="text-muted-foreground">{user.id}:</span>{" "}
              {user.displayName}
            </h2>

            <div className="flex h-8 items-center rounded-md border border-muted px-2 py-1">
              <p className="text-muted-foreground">Is admin:</p>
              {user.isAdmin ? (
                <Check className="text-primary" />
              ) : (
                <X className="text-sm text-red-400" />
              )}
            </div>
            <div className="flex h-8 items-center rounded-md border border-muted px-2 py-1">
              <p className="text-muted-foreground">Is blocked:</p>
              {user.isBlocked ? (
                <Check className="text-primary" />
              ) : (
                <X className="text-red-400" />
              )}
            </div>
          </div>
          <p className="mb-5 text-right">
            <span className="text-muted-foreground ">Joined:</span>{" "}
            {distanceFromDate(user.createdAt)}
          </p>
          <div>
            <h3 className="mb-2 text-muted-foreground">
              Requests made by {user.displayName}
            </h3>
            {user.requests.length > 0 ? (
              <div className=" grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {user.requests.map((request) => (
                  <RequestCard key={request.id} request={request} />
                ))}
              </div>
            ) : (
              <p>No requests found.</p>
            )}
          </div>

          <div className="mt-5">
            <h3 className="mb-2 text-muted-foreground">
              Comments made by {user.displayName}
            </h3>
            {user.comments.length > 0 ? (
              <div className=" grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {user.comments.map((comment) => (
                  <Link
                    className="rounded-md border border-muted px-2 pt-2 hover:border-primary"
                    key={comment.id}
                    to="/requests/$requestId"
                    params={{ requestId: comment.requestId.toString() }}
                  >
                    <p>{comment.text}</p>
                    <p className="text-right text-muted-foreground">
                      {distanceFromDate(comment.createdAt)}
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <p>No comments found.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
