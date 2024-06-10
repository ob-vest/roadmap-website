// import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

import { IRequest } from "@/hooks/useRequests";
import useUpdateRequest from "@/hooks/useUpdateRequest";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import RequestSuggestionBox from "./RequestSuggestionBox";

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
  const queryClient = useQueryClient();

  const updateRequest = useUpdateRequest({
    id: props.request.id,
  });

  const handleClose = () => {
    console.log("closing");
    props.setOpen(false);

    queryClient.invalidateQueries({
      queryKey: ["pendingRequests", "requests"],
      refetchType: "all",
    });
    queryClient.refetchQueries({
      queryKey: ["pendingRequests", "requests"],
    });
    // For some reason, the refetchQueries function is not working as expected.
    // It didnt refetch consistently, so I had to use the invalidateQueries function as well
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

    updateRequest({
      title: updatedRequest.title,
      description: updatedRequest.description,
      stateId: updatedRequest.stateId,
    }).finally(() => handleClose());
  }

  function rejectRequest() {
    const updatedRequest = { ...props.request };
    updatedRequest.stateId = 3;
    updateRequest({ stateId: updatedRequest.stateId }).finally(() =>
      handleClose(),
    );
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
        <RequestSuggestionBox
          requestId={props.request.id}
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          isTitleChecked={isTitleChecked}
          setIsTitleChecked={setIsTitleChecked}
          isDescriptionChecked={isDescriptionChecked}
          setIsDescriptionChecked={setIsDescriptionChecked}
        />
      </div>
    </div>
  );
}

export default ReviewPage;
