import { useSession } from "next-auth/react";
import Layout from "@/components/Layout";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <div>
          Hello, <b>{session?.user?.email} ({session?.user?.name})</b>
        </div>
        <div className="flex bg-gray-300 text-black gap-1 rounded-md p-1">
          <img src={session?.user?.image} alt="Avatar" className="w-6 h-6 rounded-xl"/>
          <span className="px-2">
            {session?.user?.name}
          </span>
        </div>
      </div>
    </Layout>
  );
}
