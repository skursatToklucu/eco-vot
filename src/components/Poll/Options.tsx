import React from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { Option, Poll } from "@types";
import { useCurrentUser, useVote } from "@data";

type Props = {
  p: Poll;
};

export default function Options({ p }: Props) {
  const user = useCurrentUser();
  const { vote } = useVote();
  const [poll, setPoll] = React.useState<Poll>(p);
  const [selected, setSelected] = React.useState<number>(0);

  React.useEffect(() => {
    if (p.votes && p.votes[0]) setSelected(p.votes[0].decision);
  }, [p]);

  const [isOpen, isOpenText] = getIsOpen(poll);
  const sum = poll.options.reduce(
    (accumulator: number, option: Option) => accumulator + option.count,
    0
  );

  const doVote = async (e: number) => {
    setSelected(e);
    const newPoll = await vote(poll.id, e);
    if (newPoll) {
      setPoll(newPoll);
    }
  };

  return (
    <>
      <p className="text-sm text-gray-500">
        {sum} votes - {isOpenText}
      </p>
      <div className="w-full py-4">
        <div className="mx-auto w-full">
          <RadioGroup value={selected} onChange={doVote}>
            <RadioGroup.Label className="sr-only">
              {poll.question} options
            </RadioGroup.Label>
            <div className="space-y-2">
              {poll.options.map((option, i) => (
                <RadioGroup.Option
                  disabled={!isOpen || !user}
                  key={option.option}
                  value={option.id}
                  className={({ active, checked }) =>
                    `${
                      checked
                        ? "ring-4 ring-white ring-offset-4 ring-offset-blue-300"
                        : ""
                    }
                    ${isOpen && user ? "cursor-pointer" : ""}
                    relative flex rounded-lg px-5 py-4 shadow-sm focus:outline-none`
                  }
                  style={{
                    background: `linear-gradient(to right, #DBEAFE ${(
                      (option.count / sum) *
                      100
                    ).toFixed(0)}%, white ${(
                      (option.count / sum) *
                      100
                    ).toFixed(0)}%)`,
                  }}
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex w-full items-center">
                          <RadioGroup.Label className={`font-medium w-full`}>
                            <div
                              className={`${
                                isOpen && user ? "cursor-pointer" : ""
                              } w-full flex justify-between`}
                            >
                              <span>
                                {poll.result === i + 1 && (
                                  <CheckCircleIcon className="inline text-indigo-900 h-6 w-6 mr-2" />
                                )}
                                {option.option}
                              </span>
                              <span>
                                {isNaN((option.count / sum) * 100)
                                  ? 0
                                  : ((option.count / sum) * 100).toFixed(0)}
                                %
                              </span>
                            </div>
                          </RadioGroup.Label>
                        </div>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </>
  );
}

function getIsOpen(poll: Poll) {
  const now = new Date();
  const date = new Date(poll.closes);
  const dayDifference = Math.round(
    (date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
  );
  const dayDecider = dayDifference > 1 ? `in ${dayDifference} days` : "";
  const pollInfo = `Ends ${dayDecider} at ${date.toTimeString()}`;

  const isOpen = poll.open;
  const isOpenText = poll.open ? pollInfo : "Closed";
  return [isOpen, isOpenText];
}
