'use client'

import { useSession } from "next-auth/react";

export default function Home() {

  const {data} = useSession()
  return (
    <main>
      {data && data.user?.email}
    </main>
  );
}
