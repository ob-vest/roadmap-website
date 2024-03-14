import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/request-review")({
  component: () => ReviewPage(),
});

function ReviewPage() {
  return (
    <div className="">
      <div className="flex justify-end gap-3">
        <Button
          className="h-10 text-red-600 hover:text-red-600"
          variant={"ghost"}
        >
          Reject
        </Button>
        <Button className="h-10 bg-foreground">Approve</Button>
      </div>
      <div className="mt-10 grid md:grid-cols-2">
        {/* CURRENT TEXT */}
        <div className="flex flex-col gap-10 text-left">
          <div>
            <h3>Title:</h3>
            <p className="text-muted-foreground">
              A totally new idea. Pls add button
            </p>
          </div>
          <div>
            <h3 className="mb-2">Description:</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula, purus nec luctus vestibulum, nisl libero fermentum
              ligula, nec consequat justo nisl vel ex. Donec vehicula, purus nec
              luctus vestibulum, nisl libero fermentum ligula, nec consequat
              justo nisl vel ex.
            </p>
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

            <p className="text-muted-foreground">
              A totally new idea. Pls add button
            </p>
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
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula, purus nec luctus vestibulum, nisl libero fermentum
              ligula, nec consequat justo nisl vel ex. Donec vehicula, purus nec
              luctus vestibulum, nisl libero fermentum ligula, nec consequat
              justo nisl vel ex.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
