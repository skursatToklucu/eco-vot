import React from "react";
import { CheckIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { LoadingIcon } from "@components";
import { useOptIn } from "@data";
import { validEmail } from "src/utils/Validation";

export default function Newsletter() {
  const [email, setEmail] = React.useState<string>("");
  const [emailError, setEmailError] = React.useState(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<boolean | null>(null);
  const { optIn } = useOptIn();

  const valEmail = () => {
    if (email !== "") {
      setEmailError(!validEmail(email));
    }
  };

  const submit = async () => {
    valEmail();
    if (!emailError) {
      setLoading(true);
      try {
        const opted = await optIn(email);
        setLoading(false);
        if (opted) {
          setSuccess(true);
          setEmail("");
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setSuccess(false);
      }
    }
  };

  return (
    <section className="bg-gray-50" id="newsletter">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight text-gray-900 sm:text-4xl">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-800 md:mb-12 sm:text-xl">
            Sign up with your email to stay up to date with progress on the
            project, new polls, and updates on the team.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <div className="flex flex-col mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex-row sm:space-y-0">
              <div className="grow relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  {success ? (
                    <CheckIcon className="w-5 h-5 text-green-500" />
                  ) : (
                    <EnvelopeIcon className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-indigo-500 sm:rounded-none sm:rounded-l-lg"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={valEmail}
                />
              </div>
              <button
                type="submit"
                className="p-3 sm:px-5 w-100 sm:w-30 text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-indigo-700 border-indigo-600 sm:rounded-none sm:rounded-r-lg hover:bg-indigo-800 disabled:cursor-not-allowed"
                disabled={loading || !email || emailError || !!success}
              >
                {success ? "Success!" : loading ? <LoadingIcon /> : "Subscribe"}
              </button>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-left text-red-500 newsletter-form-footer">
              {emailError &&
                "Emails must follow the correct format (e.g. fakename@myaddress.com)."}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
