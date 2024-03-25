import { Button } from "@/components/ui/button";
import useComments from "@/hooks/useComments";
import { distanceFromDate } from "@/utils/dateUtils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/requests/$requestId")({
  component: () => RequestPage(),
});
function RequestPage() {
  const { requestId } = Route.useParams();
  const { data: comments } = useComments(requestId);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col rounded-md border border-border p-4 text-left">
        <h2 className="mb-10">Request #{requestId}</h2>
        <h3>Title</h3>
        <p className="text-muted-foreground">
          A totally new idea. Pls add button
        </p>
        <h3 className="mb-2">Description</h3>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vehicula, purus nec luctus vestibulum, nisl libero fermentum ligula,
          nec consequat justo nisl vel ex. Donec vehicula, purus nec luctus
          vestibulum, nisl libero fermentum ligula, nec consequat justo nisl vel
          ex.
        </p>
        <div className="ml-auto flex gap-3">
          <Button variant={"destructive"} className="w-fit">
            Delete Request
          </Button>
        </div>
      </div>
      <div>
        {comments.length > 0 && (
          <div className="flex flex-col rounded-md border border-border p-4 text-left">
            <h2 className="mb-5 text-center">Comment section</h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {comments.map((comment) => (
                <li className="flex flex-col gap-3 rounded-md border border-border p-3 ">
                  <div className="flex justify-between">
                    <Button variant={"outline"} className="w-fit">
                      {comment.id}: {comment.displayName}
                    </Button>

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
