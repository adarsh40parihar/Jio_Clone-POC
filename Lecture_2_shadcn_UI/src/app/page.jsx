// import in which file we want to use..
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-centre gap-2">
        <div>Hello Next</div>
        <Button
          variant="default"
          className="text-bold text-white hover:bg-red-400"
        >
          Hello
        </Button>
        <div className="w-full h-8 flex gap-2 items-center justify-center">
          <Badge variant="default">Badge</Badge>
          <Badge variant="outline">Badge</Badge>
          <Badge variant="secondary">Filled Badge</Badge>
          <Badge variant="destructive">Primary Badge</Badge>
        </div>
      </div>
    </>
  );
}
