import { redirect } from "next/navigation";
import { auth } from '@clerk/nextjs/server'

import db from "@/lib/db";

import { SettingsForm } from "./components/settings-form";

const SettingsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
      userId
    }
  });

  if (!store) {
    redirect('/');
  }

  return ( 
    <div className="flex-col">
      <div className="flex-1 p-8 pt-6 space-y-4">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
}

export default SettingsPage;
