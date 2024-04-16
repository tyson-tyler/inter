import CustomFeed from "@/components/CustomFeed";
import GeneralFeed from "@/components/GeneralFeed";
import { buttonVariants } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import { Terminal } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const session = await getAuthSession();
  return (
    <>
      <h1 className="font-bold text-3xl md:text-4xl usespan pl-5 sm:text-center">
        The Prompt
      </h1>
      <div className="grid grid-cols md:grid-cols-3 gap-y-4 md:gap-x-4 py-6 ">
        {/* @ts-expect-error server component  */}
        {session ? <CustomFeed /> : <GeneralFeed />}
        <div className="sm:hidden md:flex md:flex-col overflow-hidden h-fit rounded-lg border ml-5 border-gray-800 order-first md:order-last">
          <div className="bg-gray-900 px-6 py-4">
            <p className="font-semibold py-3 flex items-center gap-1.5">
              <Terminal className="w-5 h-5" />
              Add Prompt
            </p>
          </div>
          <div className="my-3 divide-y divide-gray-600 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <p className="text-zinc-500">
                These is the Your Homepage. Threre you can explore Prompt{" "}
              </p>
            </div>
            <Link
              className={buttonVariants({ className: "w-full mt-4 mb-6" })}
              href={"/r/create"}
            >
              <Terminal className="w-6 h-6 mr-2" /> Create Prompt
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
