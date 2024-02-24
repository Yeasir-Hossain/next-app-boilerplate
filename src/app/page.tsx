import { metaObject } from "@/config/site.config";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/auth-options";

export const metadata = {
  ...metaObject("Home Page")
};

export default async function Page() {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return <h1>Home Page</h1>;
}
