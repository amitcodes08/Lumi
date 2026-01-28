import { useState } from "react";

const ClickMeHint = ({ className = "" }) => (
  <div className={`flex items-center gap-2 w-max ${className}`}>
    <span className="font-handwriting text-sm font-medium text-gray-500 -rotate-6">
      Click me!
    </span>
    <svg
      width="40"
      height="40"
      viewBox="0 0 50 50"
      className="text-gray-400 rotate-12 -mt-2"
    >
      <path
        d="M 5 25 Q 25 5 40 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 32 10 L 40 15 L 35 22"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const HeartIcon = ({ className = "" }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      onClick={() => setIsLiked(!isLiked)}
      className={`group focus:outline-none transition-transform active:scale-75 ${className}`}
      aria-label="Like"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`
          w-8 h-8 transition-all duration-300 ease-in-out
          ${
            isLiked
              ? "fill-red-500 text-red-500 scale-110 drop-shadow-md"
              : "fill-transparent text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
          }
        `}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>

      {!isLiked && (
        <div className="absolute right-full top-0 mr-4 pointer-events-none">
          <ClickMeHint className="justify-end" />
        </div>
      )}
    </button>
  );
};

export default HeartIcon;
