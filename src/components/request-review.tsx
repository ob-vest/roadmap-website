// import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { IRequest } from "@/hooks/useRequests";

// export const Route = createFileRoute("/request-review")({
//   component: () => ReviewPage(),
// });

function ReviewPage(props: { request: IRequest }) {
  return (
    <div className="p-2 pt-5 md:p-5">
      <div className="flex justify-end gap-3">
        <Button
          className="h-10 text-red-600 hover:text-red-600"
          variant={"ghost"}
        >
          Reject
        </Button>
        <Button className="h-10 bg-foreground">Approve</Button>
      </div>
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        {/* CURRENT TEXT */}
        <div className="flex flex-col gap-10 text-left">
          <div>
            <h3>Title:</h3>
            <p className="text-muted-foreground">{props.request.title}</p>
          </div>
          <div>
            <h3 className="mb-2">Description:</h3>
            <p className="text-muted-foreground">{props.request.description}</p>
          </div>
        </div>
        {/* AI SUGGESTED TEXT*/}
        <div className="flex flex-col gap-5 rounded-md border border-border p-5 text-left">
          <h3 className="text-center">AI-generated suggestion</h3>
          <Separator />
          <div>
            <div className="flex items-center justify-between">
              <h3>Title:</h3>
              <Checkbox
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                id="ai-title"
              >
                <label htmlFor="ai-title">Use this</label>
              </Checkbox>
            </div>
            <Input
              defaultValue={"A totally new idea. Pls add button"}
              type="text"
              className="mt-2 text-muted-foreground"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h3>Description:</h3>
              <Checkbox
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                id="ai-description"
              >
                <label htmlFor="ai-description">Use this</label>
              </Checkbox>
            </div>
            <Textarea className="mt-2 h-72 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula, purus nec luctus vestibulum, nisl libero fermentum
              ligula, nec consequat justo nisl vel ex. Donec vehicula, purus nec
              luctus vestibulum, nisl libero fermentum ligula, nec consequat
              justo nisl vel ex.
            </Textarea>
            {/* <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula, purus nec luctus vestibulum, nisl libero fermentum
              ligula, nec consequat justo nisl vel ex. Donec vehicula, purus nec
              luctus vestibulum, nisl libero fermentum ligula, nec consequat
              justo nisl vel ex.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
