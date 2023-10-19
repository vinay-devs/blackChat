import React from "react";

export default function TopUserBar() {
  return (
    <div className="flex flex-row space-x-8 border-b-2 border-black p-4 rounded border-gray-300 sm:border-b sm:p-2">
      <div className="text-black ml-6 min-w-min whitespace-nowrap font-bold ">
        Benjamin Joe
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="w-3 h-3 rounded-full mt-2  bg-green-500 border-black "></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-gray-400 cursor-pointer"
        >
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}
