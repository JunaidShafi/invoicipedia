import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { Invoices } from "@/db/schema";
import { cn } from "@/lib/utils";
import { eq } from "drizzle-orm";
import Link from "next/link";
export default async function InvoicePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const [result] = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.id, id))
    .limit(1);
  return (
    <div className=" my-11 flex flex-col mx-36 max-w-2xl ">
      <div className="flex justify-between mb-8">
        <h1 className=" flex items-center gap-5 text-sm font-bold md:text-4xl py-5 ">
          Invoice No {id}
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
        </h1>
        <p></p>{" "}
      </div>
      <p className="text-3xl mb-3"> ${(result.value / 100).toFixed(2)}</p>

      <p className="text-3xl mb-8"> {result.description}</p>
      <h2 className="font-bold text-lg mb-4">Billing Details</h2>
      <ul className="grid gap-2">
        <li>
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Invoice Id
          </strong>
          <span>{result.id}</span>
        </li>
        <li>
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Invoice Date
          </strong>
          <span>{new Date(result.createTs).toLocaleDateString()}</span>
        </li>
        <li>
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Billing Name
          </strong>
          <span></span>
        </li>
        <li>
          <strong className="block w-28 flex-shrink-0 font-medium text-sm">
            Billing Email
          </strong>
          <span></span>
        </li>
      </ul>
      <Button className="my-5 w-48" asChild>
        <Link href="/dashboard">Return to Dashboard</Link>
      </Button>
    </div>
  );
}
