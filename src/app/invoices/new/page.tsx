"use client";
import React, { SyntheticEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { createAction } from "@/app/actions";
import { SubmitButton } from "@/components/SubmitButton";

export default function NewInvoices() {
  const [state, setState] = useState("ready");
  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (state === "pending") return;
    setState("pending");
    const formData = new FormData(e.target as HTMLFormElement);
    await createAction(formData);

  }
  return (
    <div className=" my-11 flex flex-col   mx-36  max-w-2xl ">
      <h2 className="text-l font-bold ">Invoices</h2>
      <h1 className="text-sm font-bold md:text-4xl py-5 ">
        Create a New Invoice
      </h1>
      <form
        action={createAction}
        onSubmit={handleSubmit}
        className="my-2 max-w-lg"
      >
        <div className="py-1">
          <Label className="text-s block mb-2 font-bold" htmlFor="name">
            Billing Name
          </Label>
          <Input type="text" id="name" name="name" />
        </div>
        <div className="py-1">
          <Label className="text-s block mb-2 font-bold" htmlFor="email">
            Billing Email
          </Label>
          <Input type="email" id="email" name="email" />
        </div>
        <div className="py-1">
          {" "}
          <Label className="text-s block mb-2 font-bold" htmlFor="value">
            Value
          </Label>
          <Input type="text" id="value" name="value" />
        </div>
        <div className="py-1">
          <Label
            className="text-ls block  mb-2 font-bold"
            htmlFor="description"
          >
            Description
          </Label>
          <Textarea id="description" name="description" />
        </div>

        <SubmitButton/>
      </form>
    </div>
  );
}
