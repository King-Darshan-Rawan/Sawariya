"use client";

import { useEffect, useRef, useState } from "react";
import { waLink } from "@/lib/site";

type Msg = { from: "bot" | "user"; text: string };

type Step = {
  key: string;
  question: string;
  options?: string[];
  type?: "text" | "tel" | "datetime-local";
  validate?: (v: string) => string | null;
};

const steps: Step[] = [
  {
    key: "tripType",
    question:
      "नमस्ते 🙏 Welcome to *Shri Sanvariya Taxi Service*!\nMain aapki booking me help karunga. Kis type ki trip chahiye?",
    options: [
      "Local (Indore City)",
      "Outstation One Way",
      "Outstation Round Trip",
      "Airport Pickup/Drop",
      "Railway Station",
      "Wedding Car",
      "Corporate Travel",
      "All India Tour",
    ],
  },
  {
    key: "carType",
    question: "Great! Konsi car prefer karenge?",
    options: [
      "Swift Dzire (₹11/km)",
      "Aura (₹11/km)",
      "Ertiga (₹13/km)",
      "Innova (₹18/km)",
      "Fortuner (On Demand)",
      "Suggest me best",
    ],
  },
  {
    key: "pickup",
    question: "Pickup location kya hai? (e.g. Vijay Nagar, Indore)",
    type: "text",
    validate: (v) => (v.trim().length < 3 ? "Please enter a valid pickup location." : null),
  },
  {
    key: "drop",
    question: "Drop location batayein. (e.g. Ujjain Mahakal Temple)",
    type: "text",
    validate: (v) => (v.trim().length < 3 ? "Please enter a valid drop location." : null),
  },
  {
    key: "datetime",
    question: "Travel ki date & time select karein 🗓️",
    type: "datetime-local",
    validate: (v) => (!v ? "Please pick a date and time." : null),
  },
  {
    key: "name",
    question: "Aapka naam?",
    type: "text",
    validate: (v) => (v.trim().length < 2 ? "Please enter your name." : null),
  },
  {
    key: "phone",
    question: "Aur aapka mobile number? (10 digits)",
    type: "tel",
    validate: (v) =>
      /^[6-9]\d{9}$/.test(v.replace(/\D/g, "").slice(-10)) ? null : "Enter a valid 10-digit number.",
  },
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ from: "bot", text: steps[0].question }]);
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [done, setDone] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const data = useRef<Record<string, string>>({});
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, done]);

  const step = steps[idx];

  async function submitAll(all: Record<string, string>) {
    setSending(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...all, source: "chatbot" }),
      });
      const json = await res.json();
      const url = json.whatsappUrl ?? waLink("Hello, I want to book a taxi.");
      setDone(url);
      setMsgs((m) => [
        ...m,
        {
          from: "bot",
          text:
            `✅ Booking summary:\n` +
            `• Trip: ${all.tripType}\n` +
            `• Car: ${all.carType}\n` +
            `• ${all.pickup} → ${all.drop}\n` +
            `• When: ${all.datetime.replace("T", " ")}\n` +
            `• ${all.name} · ${all.phone}\n\n` +
            `Sab save ho gaya! Ab WhatsApp par confirm kar dijiye 👇`,
        },
      ]);
      window.open(url, "_blank");
    } catch {
      setMsgs((m) => [
        ...m,
        { from: "bot", text: "Network issue 😔 Please call us on 88188 26659." },
      ]);
    } finally {
      setSending(false);
    }
  }

  function answer(value: string) {
    if (!step) return;
    const err = step.validate?.(value);
    setMsgs((m) => [...m, { from: "user", text: value }]);
    if (err) {
      setMsgs((m) => [...m, { from: "bot", text: `⚠️ ${err}` }]);
      setInput("");
      return;
    }
    data.current[step.key] = value;
    setInput("");
    const next = idx + 1;
    if (next < steps.length) {
      setIdx(next);
      setTimeout(() => setMsgs((m) => [...m, { from: "bot", text: steps[next].question }]), 250);
    } else {
      setIdx(next);
      void submitAll({ ...data.current });
    }
  }

  function restart() {
    data.current = {};
    setIdx(0);
    setDone(null);
    setMsgs([{ from: "bot", text: steps[0].question }]);
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl shadow-lg hover:bg-green-600"
      >
        {open ? "✕" : "💬"}
      </button>

      {open && (
        <div className="fixed bottom-40 right-5 z-50 flex h-[480px] w-[92vw] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center gap-3 bg-[#0b1f3a] px-4 py-3 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-lg">
              🚖
            </span>
            <div>
              <p className="text-sm font-bold">Sanvariya Booking Assistant</p>
              <p className="text-[11px] text-green-400">● Online 24×7</p>
            </div>
          </div>

          <div ref={boxRef} className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3 py-2 text-[13px] leading-5 ${
                    m.from === "user"
                      ? "rounded-br-sm bg-amber-400 text-slate-900"
                      : "rounded-bl-sm bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
            {sending && <p className="text-xs text-slate-400">Assistant is typing…</p>}
            {done && (
              <div className="space-y-2">
                <a
                  href={done}
                  target="_blank"
                  className="block rounded-lg bg-green-500 px-4 py-2.5 text-center text-sm font-bold text-white hover:bg-green-600"
                >
                  💬 Confirm on WhatsApp
                </a>
                <button
                  onClick={restart}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  Start new booking
                </button>
              </div>
            )}
          </div>

          {!done && step && (
            <div className="border-t border-slate-200 bg-white p-3">
              {step.options ? (
                <div className="flex flex-wrap gap-2">
                  {step.options.map((o) => (
                    <button
                      key={o}
                      onClick={() => answer(o)}
                      className="rounded-full border border-amber-400 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-[#0b1f3a] hover:bg-amber-400"
                    >
                      {o}
                    </button>
                  ))}
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (input) answer(input);
                  }}
                  className="flex gap-2"
                >
                  <input
                    autoFocus
                    type={step.type}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your answer…"
                    className="w-full rounded-full border border-slate-300 px-4 py-2 text-sm outline-none focus:border-amber-400"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-[#0b1f3a] px-4 text-sm font-bold text-white"
                  >
                    ➤
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
