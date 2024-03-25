import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "@tanstack/react-router";
import { ArrowUp, MessageSquare } from "lucide-react";
import { IRequest, createdAtDistance } from "@/hooks/useRequests";

const RequestCard = (props: { request: IRequest }) => (
  <Link
    to="/requests/$requestId"
    params={{ requestId: props.request.id.toString() }}
    className="w-full rounded-md border border-border text-left hover:border-primary"
  >
    <div className="px-4 pt-4">
      <h4 className="mb-4 font-semibold">{props.request.title}</h4>
      <div className="flex justify-between">
        <Badge className="mb-4">Feature</Badge>
        <p className="text-sm text-muted-foreground">
          {createdAtDistance(props.request.createdAt)}
        </p>
      </div>
    </div>

    <ScrollArea className="h-40 select-none px-4 text-muted-foreground">
      {props.request.description}
    </ScrollArea>
    <div className="flex justify-start gap-4 px-2 pb-1">
      <div className="flex items-center gap-1">
        <ArrowUp className="h-5 text-sm text-muted-foreground" />
        <p>{props.request.upvoteCount}</p>
      </div>
      <div className="flex items-center gap-1">
        <MessageSquare className="h-5 text-sm text-muted-foreground" />
        <p>{props.request.commentCount}</p>
      </div>
    </div>
  </Link>
);

export default RequestCard;
