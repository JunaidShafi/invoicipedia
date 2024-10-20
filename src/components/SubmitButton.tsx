import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { LoaderCircle } from "lucide-react";

export function SubmitButton() {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <div className="mt-4">
      <Button className="w-full ">
        {!pending ? (
          <span className="font-semibold">Sign In</span>
        ) : (
          <span className="font-semibold animate-spin">
            <LoaderCircle />
          </span>
        )}
      </Button>
    </div>
  );
}
