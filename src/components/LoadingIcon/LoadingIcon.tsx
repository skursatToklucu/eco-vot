import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function LoadingIcon() {
  return (
    <div role="status">
      <ArrowPathIcon className="w-5 h-5 animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
