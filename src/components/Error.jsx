import { useNavigate, useRouteError } from "react-router";
import lumiLogo from "../assets/lumi-logo.png";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-brand-950 px-4">
      <div className="w-full max-w-md bg-brand-900 p-8 rounded-2xl border border-brand-800 shadow-2xl flex flex-col items-center text-center">
        <div className="mb-6">
          <img
            src={lumiLogo}
            alt="Lumi Logo"
            className="h-16 w-auto brightness-110 opacity-80"
          />
        </div>

        <h1 className="text-6xl font-bold font-display text-white mb-2 tracking-tight">
          {error?.status || "404"}
        </h1>

        <h2 className="text-xl font-semibold text-brand-100 mb-3">
          Page Not Found
        </h2>

        <p className="text-brand-400 text-sm mb-8 leading-relaxed px-4">
          {error?.statusText ||
            error?.message ||
            "Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist."}
        </p>

        <button
          onClick={handleGoHome}
          className="w-full bg-brand-100 hover:bg-brand-200 text-brand-900 font-semibold py-2.5 rounded-lg transition-colors shadow-lg shadow-brand-900/50 active:scale-95 duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
