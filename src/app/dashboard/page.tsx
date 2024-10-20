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

export default function page() {
  return (
    <main className="flex flex-col max-w-5xl my-36  mx-auto  text-center">
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
            <TableRow>
              <TableCell className="font-medium text-left p-4">
                20/10/2024
              </TableCell>
              <TableCell className=" text-left p-4">
                <span className="font-semibold">Junaid Shafi</span>{" "}
              </TableCell>
              <TableCell className=" text-left p-4">
                <span className="font-semibold"> pir@tir.com</span>
              </TableCell>
              <TableCell className="text-center p-4">
                <Badge className="rounded-full">Open</Badge>
              </TableCell>
              <TableCell className="text-right p-4">
                <span className="font-semibold">$250.00</span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </main>
  );
}
