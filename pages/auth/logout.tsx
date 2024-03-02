import React from "react";
import { useRouter } from "next/router";
import { BasePage } from "@components";
import { useLogout } from "@data";

export default function Index() {
  const router = useRouter();
  const { logout } = useLogout();

  React.useEffect(() => {
    logout();
    router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BasePage title="Login">
      <h1 className="text-center text-3xl p-5">Logout</h1>
    </BasePage>
  );
}
