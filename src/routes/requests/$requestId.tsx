import { Button } from "@/components/ui/button";
import { Popover, PopoverContent } from "@/components/ui/popover";
import useComments from "@/hooks/useComments";
import useRequest from "@/hooks/useRequest";
import { distanceFromDate } from "@/utils/dateUtils";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowUp, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/requests/$requestId")({
  component: () => RequestPage(),
});
function RequestPage() {
  const { requestId } = Route.useParams();
  const { data: request } = useRequest(requestId);
  const { data: comments } = useComments(requestId);

  return (
    <div className="flex flex-col gap-5">
      {request !== undefined && (
        <div className="flex flex-col rounded-md border border-border p-4 text-left">
          <h2 className="mb-10">Request #{requestId}</h2>
          <h3>Title</h3>
          <p className="text-muted-foreground">{request.title}</p>
          <h3 className="mb-2">Description</h3>
          <p className="text-muted-foreground">{request.description}</p>
          <div className="mt-2 flex items-end justify-between gap-3">
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <ArrowUp className="h-5 text-sm text-muted-foreground" />
                <p>{request.upvoteCount}</p>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-5 text-sm text-muted-foreground" />
                <p>{request.commentCount}</p>
              </div>
            </div>

            <Button variant={"destructive"} className="w-fit">
              Delete Request
            </Button>
          </div>
        </div>
      )}

      <div>
        {comments.length > 0 && (
          <div className="flex flex-col rounded-md border border-border p-4 text-left">
            <h2 className="mb-5 text-center">Comment section</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {comments.map((comment) => (
                <li
                  className="flex flex-col gap-3 rounded-md border border-border p-3"
                  key={comment.id}
                >
                  <div className="flex justify-between">
                    <Popover>
                      <PopoverTrigger>
                        <Button variant={"outline"} className="w-fit">
                          {comment.userId}: {comment.displayName}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 border-border">
                        <div className="flex flex-col gap-2">
                          <Link
                            to="/users/$userId"
                            params={{ userId: comment.userId.toString() }}
                            className="rounded-md border border-border bg-transparent p-2 text-sm text-primary hover:bg-primary hover:text-black"
                          >
                            Go to user page
                          </Link>
                          <Button className="border border-border bg-transparent text-red-700 hover:bg-red-700 hover:text-white">
                            Block user
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>

                    <p className="ml-2 text-xs text-muted-foreground">
                      {distanceFromDate(comment.createdAt)}
                    </p>
                  </div>
                  <div className="flex items-end justify-between">
                    <p className="text-muted-foreground">{comment.text}</p>
                    <Button
                      variant={"outline"}
                      className="w-fit text-destructive hover:text-destructive"
                    >
                      Delete
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
