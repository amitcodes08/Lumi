import { useNavigate } from "react-router";
import lumiLogo from "../assets/lumi-logo.png";

const Login = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-brand-950 px-4">
      <div className="w-full max-w-md bg-brand-900 p-8 rounded-2xl border border-brand-800 shadow-2xl flex flex-col items-center">
        <div className="flex flex-col items-center mb-8 gap-2">
          <div className="flex items-center">
            <img
              src={lumiLogo}
              alt="Lumi Logo"
              className="h-10 w-auto -mr-4 brightness-110"
            />
            <span className="text-3xl font-bold font-display text-white tracking-wide">
              lumi
            </span>
          </div>
          <p className="text-brand-200/60 text-sm">
            Welcome back! Please enter your details.
          </p>
        </div>

        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-brand-200">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-brand-950 border border-brand-800 rounded-lg text-brand-50 placeholder-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-brand-200">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-brand-950 border border-brand-800 rounded-lg text-brand-50 placeholder-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-brand-300 cursor-pointer hover:text-brand-200 transition-colors">
              <input
                type="checkbox"
                className="rounded border-brand-700 bg-brand-950 text-brand-600 focus:ring-brand-500 focus:ring-offset-brand-900"
              />
              Remember me
            </label>
            <a
              href="#"
              className="text-brand-400 hover:text-brand-300 font-medium hover:underline"
            >
              Forgot password?
            </a>
          </div>

          <button className="w-full mt-4 bg-brand-100 hover:bg-brand-200 text-brand-900 font-semibold py-2.5 rounded-lg transition-colors shadow-lg shadow-brand-900/50 active:scale-95 duration-200">
            Sign In
          </button>
        </form>

        <p className="mt-6 text-sm text-brand-400">
          Don't have an account?{" "}
          <span
            onClick={handleSignup}
            className="text-brand-200 font-semibold cursor-pointer hover:underline hover:text-white transition-colors"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
