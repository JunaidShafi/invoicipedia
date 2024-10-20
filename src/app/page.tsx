import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" mt-4 flex flex-col justify-center h-full max-w-5xl text-center">
      <h1 className="text-5xl font-bold">Invoicipedia</h1>
      <p className="mt-8">
        <Button variant="default" asChild>
          <Link href="/dashboard">Sign In</Link>
        </Button>
      </p>
    </div>
  );
}
