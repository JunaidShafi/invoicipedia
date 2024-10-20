import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { cn } from "@/lib/utils";
export default async function page() {
  const results = await db.select().from(Invoices);
  return (
    <main className="flex flex-col max-w-6xl my-36  mx-auto  text-center">
      <div className="flex justify-between py-4">
        <h1 className="text-3xl font-bold text-left ml-4">Invoices</h1>
        <Button className="flex inline-flex gap-1" variant="ghost" asChild>
          <Link href="/invoices/new">
            <CirclePlus className="h-4 w-4" />
            Create Invoice
          </Link>
        </Button>
      </div>

      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] p-4">Date</TableHead>
              <TableHead className=" p-4">Customer</TableHead>
              <TableHead className=" p-4">Email</TableHead>
              <TableHead className="text-center p-4">Status</TableHead>
              <TableHead className="text-right p-4">Amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {results.map((result) => {
              return (
                <TableRow key={result.id}>
                  <TableCell className="font-medium text-left  p-0">
                    <Link
                      href={`/invoice/${result.id}`}
                      className=" font-bold block p-4"
                    >
                      {new Date(result.createTs).toLocaleDateString("en-IN")}
                    </Link>
                  </TableCell>
                  <TableCell className="text-left p-0">
                    <Link
                      href={`/invoice/${result.id}`}
                      className="font-bold block p-4"
                    >
                      Junaid Shafi
                    </Link>
                  </TableCell>
                  <TableCell className="text-left p-0">
                    <Link
                      href={`/invoice/${result.id}`}
                      className=" block p-4 font-semibold"
                    >
                      pir@tir.com
                    </Link>
                  </TableCell>
                  <TableCell className="text-center p-0">
                    <Link href={`/invoice/${result.id}`} className=" block p-4">
                      <Badge
                        className={cn(
                          "rounded-full capitalize",
                          result.status === "open" && "bg-blue-500",
                          result.status === "paid" && "bg-green-500",
                          result.status === "void" && "bg-zinc-700",
                          result.status === "uncollectible" && "bg-red-600"
                        )}
                      >
                        {result.status}
                      </Badge>
                    </Link>
                  </TableCell>
                  <TableCell className="text-right p-0">
                    <Link href={`/invoice/${result.id}`} className=" block p-4">
                      ${(result.value / 100).toFixed(2)}
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
