import { FC } from "react";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import StoreSwitcher from "@/components/StoreSwitcher";
import MainNav from "@/components/MainNav";
import ThemeToggle from "@/components/ThemeToggle";
import db from "@/lib/db";
import MobileNav from "./MobileNav";

const Navbar: FC = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await db.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <StoreSwitcher items={stores} />
        <MainNav className="mx-6" />
        <div className="flex items-center ml-auto space-x-4">
          <MobileNav />

          <ThemeToggle />
          {/* <UserButton afterSignOutUrl="/" /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
