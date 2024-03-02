import React from "react";
import { useRouter } from "next/router";
import { Switch } from "@headlessui/react";
import { BasePage, LoadingIcon } from "@components";
import { useCodeRequest, useCodeValidate } from "@data";

const title = "Sign Up | NeutralStack.io";
const meta =
  "Sign up for an account to become part of the world's first community run eSports team. Create an account, vote in polls, and let your voice be heard.";
const metaImage =
  "https://neutralstack.io/_next/image?url=%2Fimages%2Flogo.png";

export default function Index() {
  const router = useRouter();

  const [step, setStep] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [optIn, setOptIn] = React.useState(true);
  const [code, setCode] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const { codeRequest } = useCodeRequest();
  const { codeValidate } = useCodeValidate();

  const request = async () => {
    try {
      setLoading(true);
      const user = await codeRequest(email, optIn);
      if (user) {
        setLoading(false);
        // Move the user to step two
        setError(false);
        setStep(false);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  const submit = async () => {
    try {
      setLoading(true);
      const user = await codeValidate(email, code);
      if (user) {
        // Redirect user to user account
        await router.push("/");
        setLoading(false);
      }
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <BasePage
      title={title}
      meta={meta}
      metaDesc={meta}
      metaTitle={title}
      metaImage={metaImage}
    >
      <h1 className="text-center text-3xl p-5">Sign Up</h1>
      <div className="mx-auto w-96">
        <form>
          {step
            ? stepOne({
                email,
                setEmail,
                optIn,
                setOptIn,
                loading,
                error,
                request,
              })
            : stepTwo({
                code,
                setCode,
                setStep,
                setError,
                loading,
                error,
                submit,
              })}
        </form>
      </div>
    </BasePage>
  );
}

function stepOne({
  email,
  setEmail,
  optIn,
  setOptIn,
  loading,
  error,
  request,
}: {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  optIn: boolean;
  setOptIn: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  error: boolean;
  request: () => Promise<void>;
}) {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {error && (
          <p className="text-red-500 text-xs italic">
            Please enter a valid email
          </p>
        )}
      </div>
      <div className="flex mb-3">
        <Switch
          id="newsletter"
          checked={optIn}
          onChange={setOptIn}
          className={`${
            optIn ? "bg-indigo-500" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enroll in our email list</span>
          <span
            className={`${
              optIn ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <label htmlFor="newsletter" className="mx-2 text-gray-700">
          Enroll in email alerts
        </label>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          onClick={() => request()}
          disabled={loading}
        >
          {loading ? <LoadingIcon /> : "Next"}
        </button>
      </div>
    </>
  );
}

function stepTwo({
  code,
  setCode,
  setStep,
  setError,
  loading,
  error,
  submit,
}: {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  error: boolean;
  submit: () => Promise<void>;
}) {
  return (
    <>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm mb-2" htmlFor="text">
          Please enter your one time passcode from your email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="test"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        {error && (
          <p className="text-red-500 text-xs italic">
            Please enter a valid code.
          </p>
        )}
      </div>
      <div className="flex justify-between">
        {loading ? (
          // Empty div to hold the place of the far button
          <div></div>
        ) : (
          <button
            type="button"
            className=" rounded-md px-4 py-2 text-sm font-medium text-indigo-900 hover:underline hover:text-indigo-700"
            onClick={() => {
              setError(false);
              setStep(true);
              setCode("");
            }}
            disabled={loading}
          >
            Previous
          </button>
        )}
        <button
          type="button"
          className="rounded-md border border-transparent bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          onClick={() => submit()}
          disabled={loading}
        >
          {loading ? <LoadingIcon /> : "Sign Up"}
        </button>
      </div>
    </>
  );
}
