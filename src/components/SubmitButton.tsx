import React from "react";
import { Button } from "./ui/button";
import { LoaderCircle } from "lucide-react";

type AppProps = {
  state: boolean;
};

export function SubmitButton({ state }: AppProps) {
  console.log(state);
  return (
    <div>
      <Button className="w-full ">
        <span
          className={
            state
              ? "font-semibold text-transparent text-gray-700"
              : "disabled:opacity-0 w-full font-semibold "
          }
        >
          Sign In
        </span>
        <span className={state ? "animate-spin" : "text-transparent"}>
          <LoaderCircle />
        </span>
      </Button>
    </div>
  );
}
