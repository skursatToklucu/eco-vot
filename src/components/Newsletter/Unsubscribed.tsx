import React from "react";
import { useRouter } from "next/router";
import { useOptOut } from "@data";

export default function Unsubscribed() {
  const router = useRouter();
  const { email } = router.query;
  const { optOut } = useOptOut();

  React.useEffect(() => {
    if (typeof email === "string") {
      optOut(email);
    }
  }, [email, optOut]);

  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight text-gray-900 sm:text-4xl">
            We are sad to see you go
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-800 md:mb-12 sm:text-xl">
            You have been unsubscribed from our content.
          </p>
        </div>
      </div>
    </section>
  );
}
