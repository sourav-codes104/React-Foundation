import React, { useEffect, useState } from "react";

const App = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const [isExpired, setExpired] = useState("NO");

  const otpGenerator = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  useEffect(() => {
    if (!otp) {
      return;
    }

    const time = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(time);
          setExpired("YES");
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, [otp]);
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-8 text-slate-100">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-cyan-950/30">
        <div className="mb-8 text-center text-3xl font-bold tracking-tight text-cyan-300">
          OTP-Generator
        </div>
        <button
          className="w-full rounded-lg bg-cyan-400 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900"
          onClick={() => {
            setOtp(otpGenerator());
            setTimer(30);
            setExpired("NO");
          }}
        >
          Generate OTP
        </button>
        <div className="my-8 rounded-xl border border-dashed border-slate-700 bg-slate-950/60 px-4 py-6 text-center text-4xl font-bold tracking-[0.35em] text-white">
          {otp || "------"}
        </div>
        <div className="mb-6 text-center text-sm text-slate-400">
          Valid for <span className="font-semibold text-cyan-300">00:{String(timer).padStart(2, "0")}</span>
        </div>
        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>OTP Expired</span>
          <span className={isExpired === "YES" ? "font-semibold text-rose-400" : "font-semibold text-emerald-400"}>
            {isExpired}
          </span>
        </div>
      </div>
    </main>
  );
};

export default App;
