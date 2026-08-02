"use client";

import { useState } from "react";

const fields = [
  { name: "name", label: "Your Name", type: "text", icon: "👤" },
  { name: "phone", label: "Phone Number", type: "tel", icon: "📞" },
  { name: "pickup", label: "Pickup Location", type: "text", icon: "📍" },
  { name: "drop", label: "Drop Location", type: "text", icon: "🏁" },
  { name: "datetime", label: "Date & Time", type: "datetime-local", icon: "🗓️" },
];

const cars = ["Swift Dzire", "Aura", "Ertiga", "Innova", "Fortuner"];

export default function BookingForm() {
  const [form, setForm] = useState<Record<string, string>>({
    name: "",
    phone: "",
    pickup: "",
    drop: "",
    datetime: "",
    carType: "Swift Dzire",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMsg("");
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMsg(data.error ?? "Something went wrong");
        return;
      }
      setStatus("done");
      setMsg("Booking received! Opening WhatsApp...");
      window.open(data.whatsappUrl, "_blank");
    } catch {
      setStatus("error");
      setMsg("Network error. Please call us directly.");
    }
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className={f.name === "datetime" ? "sm:col-span-2" : ""}>
            <label className="flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3 py-2.5 focus-within:border-amber-400">
              <span className="text-sm opacity-60">{f.icon}</span>
              <input
                required
                type={f.type}
                placeholder={f.label}
                value={form[f.name]}
                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </label>
          </div>
        ))}
        <div className="sm:col-span-2">
          <select
            value={form.carType}
            onChange={(e) => setForm({ ...form, carType: e.target.value })}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none"
          >
            {cars.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-amber-400 px-6 py-3 text-sm font-bold tracking-wide text-slate-900 transition hover:bg-amber-300 disabled:opacity-60"
      >
        {status === "loading" ? "SENDING..." : "SUBMIT BOOKING  ›"}
      </button>
      {msg && (
        <p className={`text-sm ${status === "error" ? "text-red-600" : "text-green-700"}`}>{msg}</p>
      )}
      <p className="text-center text-xs text-slate-500">
        Your booking is sent directly to our WhatsApp for instant confirmation.
      </p>
    </form>
  );
}
