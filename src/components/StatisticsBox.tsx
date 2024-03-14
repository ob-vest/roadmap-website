import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "./ui/separator";

const StatisticsBox = () => {
  return (
    <div className="flex h-60 flex-col rounded-md border border-border px-5 py-3">
      <div className="flex items-center justify-between">
        <h3 className="hidden md:block">Statistics</h3>
        <div className="ml-auto flex items-center gap-5">
          <p className="text-sm text-muted-foreground">In the past</p>
          <Select defaultValue="30">
            <SelectTrigger className="w-[100px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Week</SelectItem>
              <SelectItem value="30">Month</SelectItem>
              <SelectItem value="90">Quarter</SelectItem>
              <SelectItem value="365">Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex h-20 flex-grow items-center justify-between py-5">
        <div className="flex w-20 flex-col justify-center md:w-36">
          <h4 className="text-muted-foreground">Upvotes</h4>
          <p className="py-5 text-4xl font-semibold">132</p>
        </div>
        <Separator orientation="vertical" className="h-20" />
        <div className="flex w-20 flex-col justify-center md:w-36">
          <h4 className="text-muted-foreground">Upvotes</h4>
          <p className="py-5 text-4xl font-semibold">132</p>
        </div>
        <Separator orientation="vertical" className="h-20" />
        <div className="flex w-20 flex-col justify-center md:w-36">
          <h4 className="text-muted-foreground">Upvotes</h4>
          <p className="py-5 text-4xl font-semibold">132</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsBox;
