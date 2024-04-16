// import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { IRequest } from "@/hooks/useRequests";
import useUpdateRequest from "@/hooks/useUpdateRequest";
import { useState } from "react";

// export const Route = createFileRoute("/request-review")({
//   component: () => ReviewPage(),
// });

function ReviewPage(props: {
  request: IRequest;
  setOpen: (open: boolean) => void;
}) {
  const [title, setTitle] = useState(props.request.title);
  const [description, setDescription] = useState(props.request.description);
  const [isTitleChecked, setIsTitleChecked] = useState(false);
  const [isDescriptionChecked, setIsDescriptionChecked] = useState(false);

  const updateRequest = useUpdateRequest({
    id: props.request.id,
  });

  const handleClose = () => {
    props.setOpen(false);
  };

  function approveRequest() {
    const updatedRequest = { ...props.request };
    if (isTitleChecked) {
      console.log("title checked");
      updatedRequest.title = title;
    }
    if (isDescriptionChecked) {
      console.log("description checked");
      updatedRequest.description = description;
    }
    updatedRequest.stateId = 2;

    updateRequest(updatedRequest);
    handleClose();
  }

  function rejectRequest() {
    const updatedRequest = { ...props.request };
    updatedRequest.stateId = 3;
    updateRequest(updatedRequest);
    handleClose();
  }

  return (
    <div className="p-2 pt-5 md:p-5">
      <div className="flex justify-end gap-3">
        <Button
          className="h-10 text-red-600 hover:text-red-600"
          variant={"ghost"}
          onClick={() => rejectRequest()}
        >
          Reject
        </Button>
        <Button className="h-10 bg-foreground" onClick={() => approveRequest()}>
          Approve
        </Button>
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
                onCheckedChange={() => setIsTitleChecked(!isTitleChecked)}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                id="ai-title"
              >
                <label htmlFor="ai-title">Use this</label>
              </Checkbox>
            </div>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="mt-2 text-muted-foreground"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h3>Description:</h3>
              <Checkbox
                onCheckedChange={() =>
                  setIsDescriptionChecked(!isDescriptionChecked)
                }
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                id="ai-description"
              >
                <label htmlFor="ai-description">Use this</label>
              </Checkbox>
            </div>
            <Textarea
              className="mt-2 h-72 text-muted-foreground"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
