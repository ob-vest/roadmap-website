import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "@tanstack/react-router";
const RequestCard = () => (
  <Link
    to="/"
    className="w-full rounded-md border border-border text-left hover:border-primary"
  >
    <div className="px-4 pt-4">
      <h4 className="mb-4 font-semibold">A totally new idea. Pls add button</h4>
      <div className="flex justify-between">
        <Badge className="mb-4">Feature</Badge>
        <p className="text-sm text-muted-foreground">24. january</p>
      </div>
    </div>

    <ScrollArea className="h-40 select-none px-4 text-muted-foreground">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula,
      purus nec luctus vestibulum, nisl libero fermentum ligula, nec consequat
      justo nisl vel ex. Donec vehicula, purus nec luctus vestibulum, nisl
      libero fermentum ligula, nec consequat justo nisl vel ex.
    </ScrollArea>
  </Link>
);

export default RequestCard;
