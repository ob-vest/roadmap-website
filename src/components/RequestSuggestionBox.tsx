import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import useSuggestionRequest from "@/hooks/useAISuggestion";

function RequestSuggestionBox({
  title,
  description,
  setTitle,
  setDescription,
  isTitleChecked,
  setIsTitleChecked,
  isDescriptionChecked,
  setIsDescriptionChecked,
}: {
  title: string;
  description: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  isTitleChecked: boolean;
  setIsTitleChecked: (isTitleChecked: boolean) => void;
  isDescriptionChecked: boolean;
  setIsDescriptionChecked: (isDescriptionChecked: boolean) => void;
}) {
  const {
    data: suggestion,
    error,
    isLoading,
  } = useSuggestionRequest({ title, description });

  return (
    <div className="flex flex-col gap-5 rounded-md border border-border p-5 text-left">
      <h3 className="text-center">AI-generated suggestion</h3>
      <Separator />
      {suggestion && (
        <>
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
              value={suggestion.title}
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
              value={suggestion.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default RequestSuggestionBox;
