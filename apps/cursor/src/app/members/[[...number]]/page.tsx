import { MembersList } from "@/components/members/members-list";
import { Button } from "@/components/ui/button";
import { getMembers, getTotalUsers } from "@/data/queries";
import { formatNumber } from "@/utils/format";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Join the Cursor Community | Cursor Directory",
  description:
    "Join the fastest growing community of Cursor developers around the world",
};

export const revalidate = 300;

type Props = {
  params: Promise<{ number: string[] | undefined }>;
};

export default async function Page({ params }: Props) {
  const { number } = await params;

  const { data: totalUsers } = await getTotalUsers();

  const pageNumber = +(number?.[0] ?? 1);

  const { data: members } = await getMembers({
    page: pageNumber,
    limit: 90,
  });

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12 md:mt-24 pb-32">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl mb-2">Browse Members</h1>
          <p className="text-sm text-[#878787] mb-8">
            Join the Cursor community with{" "}
            {formatNumber(totalUsers?.count ?? 0)} members.
          </p>
        </div>

        <Link href="/login">
          <Button
            type="button"
            variant="outline"
            className="border-border rounded-full"
          >
            Join the community
          </Button>
        </Link>
      </div>

      <MembersList members={members} />

      <div className="flex justify-center mt-12">
        <Link href={`/members/${pageNumber + 1}`} className="w-full">
          <Button variant="outline" className="border-border w-full">
            Load more
          </Button>
        </Link>
      </div>
    </div>
  );
}
