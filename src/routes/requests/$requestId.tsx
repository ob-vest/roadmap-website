import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/requests/$requestId")({
  // loader: ({ params }) => {
  //   params.requestId;
  // },

  component: () => RequestPage(),
});
function RequestPage() {
  const { requestId } = Route.useParams();
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col rounded-md border border-border p-4 text-left">
        <h2 className="mb-10">Request {requestId}</h2>
        <h4>Title</h4>
        <p>A totally new idea. Pls add button</p>
        <h4 className="mb-2">Description</h4>
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
        <div className="flex flex-col rounded-md border border-border p-4 text-left">
          <h2 className="mb-5 text-center">Comment section</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            <li className="flex flex-col gap-3 rounded-md border border-border p-3 ">
              <div className="flex justify-between">
                <Button variant={"outline"} className="w-fit">
                  34: known fish
                </Button>

                <p className="ml-2 text-xs text-muted-foreground">30min ago</p>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-muted-foreground">
                  A totally new idea. Pls add button A totally new idea. Pls add
                  button A totally new idea. Pls add button A totally new idea.
                  Pls add button A totally new idea. Pls add button A totally
                  new idea. Pls add button A totally new idea. Pls add button A
                  totally new idea. Pls add button
                </p>
                <Button
                  variant={"outline"}
                  className="w-fit text-destructive hover:text-destructive"
                >
                  Delete
                </Button>
              </div>
            </li>
            <li className="flex flex-col gap-3 rounded-md border border-border p-3 ">
              <div className="flex justify-between">
                <Button variant={"outline"} className="w-fit">
                  34: known fish
                </Button>

                <p className="ml-2 text-xs text-muted-foreground">30min ago</p>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-muted-foreground">
                  A totally new idea. Pls add button A totally new idea. Pls add
                  button A totally new idea. Pls add button A totally new idea.
                  Pls add button A totally new idea. Pls add button A totally
                  new idea. Pls add button A totally new idea. Pls add button A
                  totally new idea. Pls add button
                </p>
                <Button
                  variant={"outline"}
                  className="w-fit text-destructive hover:text-destructive"
                >
                  Delete
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
