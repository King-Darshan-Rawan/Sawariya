import Image from "next/image";
import Header from "@/components/Header";
import BookingForm from "@/components/BookingForm";
import ChatBot from "@/components/ChatBot";
import DestinationSlider from "@/components/DestinationSlider";
import { carWaLink } from "@/lib/site";
import { BASE_PATH } from "@/lib/constants";

const PHONE1 = "73898 16018";
const PHONE2 = "88188 26659";
const WA = "https://wa.me/919826111707?text=Hello%20Shri%20Sanvariya%20Taxi%20Service,%20I%20want%20to%20book%20a%20taxi.";

const services = [
  ["Local Taxi Service", "🏙️", "Indore city ke andar kahin bhi, hourly & point-to-point."],
  ["Outstation Taxi", "🛣️", "Ujjain, Bhopal, Omkareshwar, Maheshwar & more."],
  ["Airport Pickup & Drop", "✈️", "Devi Ahilyabai Holkar Airport, 24x7 on-time."],
  ["Railway Station Pickup", "🚆", "Indore Junction pickup & drop service."],
  ["One Way Trip", "➡️", "Pay only one side — best one way fares."],
  ["Round Trip", "🔄", "Comfortable return journeys at package rates."],
  ["Wedding Car", "💐", "Decorated cars for shaadi & functions."],
  ["Corporate Travel", "💼", "Monthly & staff travel contracts."],
  ["All India Tour", "🇮🇳", "Long tour packages anywhere in India."],
];

const fleet = [
  ["Swift Dzire", "/images/swift.png", "₹11", "4+1 Seater"],
  ["Aura", "/images/Aura.png", "₹11", "4+1 Seater"],
  ["Ertiga", "/images/ertiga.png", "₹13", "6+1 Seater"],
  ["Innova", "/images/innova.png", "₹18", "7+1 Seater"],
  ["Fortuner", "/images/fortuner.png", "On Demand", "7 Seater SUV"],
];

const whyChoose: [string, string, string][] = [
  ["Well Maintained", "& Clean Cars", "🚗"],
  ["Professional", "& Experienced Drivers", "🧑‍✈️"],
  ["On Time", "Pickup & Drop", "⏱️"],
  ["Affordable", "Prices", "₹"],
  ["24x7 Customer", "Support", "🎧"],
  ["Safe & Comfortable", "Journey", "🛡️"],
];

const testimonials = [
  ["Rohit Sharma", "Very Good Service, Clean Car & Professional Driver."],
  ["Priya Verma", "Best Taxi Service in Indore."],
  ["Amit Patel", "On Time Pickup & Affordable Price."],
];

const faqs = [
  ["Airport Pickup Available?", "Yes, 24×7 Available."],
  ["Outstation Booking?", "Yes, we cover all outstation routes across India."],
  ["Advance Booking?", "Yes, advance booking available on call & WhatsApp."],
];

function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center justify-center gap-3">
      <span className="hidden h-px w-16 bg-amber-400 sm:block" />
      <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-[#0b1f3a] sm:text-3xl">
        {children}
      </h2>
      <span className="hidden h-px w-16 bg-amber-400 sm:block" />
    </div>
  );
}

export default function Home() {
  return (
    <main id="home">
      <Header />

      {/* HERO / SLIDER */}
      <section className="relative isolate overflow-hidden bg-[#0b1f3a]">
        <Image
          src={`${BASE_PATH}/images/hero.png`}
          alt="Shri Sanvariya Taxi Service Indore"
          fill
          priority
          className="object-fit opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1f3a] via-[#0b1f3a]/85 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
            Indore&apos;s Most Trusted
          </p>
          <h1 className="mt-2 text-4xl font-extrabold uppercase leading-none text-white sm:text-6xl">
            Shri Sanvariya
            <br />
            <span className="text-amber-400">Taxi Service</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-200 sm:text-lg">
            Indore&apos;s Trusted Local &amp; Outstation Taxi Service
          </p>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            24×7 Taxi Service | Airport Pickup &amp; Drop | Railway Station Pickup | Wedding |
            Corporate | All India Tour
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-md bg-amber-400 px-7 py-3 text-sm font-bold text-slate-900 hover:bg-amber-300"
            >
              📞 BOOK NOW
            </a>
            <a
              href="#services"
              className="rounded-md border border-white/70 px-7 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              OUR SERVICES ›
            </a>
          </div>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section id="destinations" className="py-16 pb-0">
        <div className="mx-auto max-w-6xl px-4">
          <Title>Popular Destinations</Title>
          <p className="-mt-4 mb-6 text-center text-sm text-slate-600">
            Indore, Madhya Pradesh &amp; All India — tap any place to get an instant fare on
            WhatsApp.
          </p>
        </div>

        <section className="pb-10 sm:pb-16">
          <DestinationSlider />
        </section>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-slate-50/60 mx-auto max-w-6xl px-4 py-16 pt-0 pb-0">
        <Title>About Us</Title>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative h-64 overflow-hidden rounded-xl sm:h-80">
            <Image src={`${BASE_PATH}/images/driver.png`} alt="Our drivers" fill className="object-cover" />
          </div>
          <div>
            <p className="text-[15px] leading-8 text-slate-700">
              Shri Sanvariya Taxi Service Indore पिछले कई वर्षों से सुरक्षित, समय पर और भरोसेमंद
              टैक्सी सेवा प्रदान कर रही है। हमारी साफ-सुथरी गाड़ियाँ और अनुभवी ड्राइवर आपकी यात्रा
              को आरामदायक बनाते हैं।
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {whyChoose.map((f) => (
                <li key={f[0]} className="flex items-start gap-2 text-sm font-medium text-slate-800">
                  <span className="text-amber-500">✔</span> {f[0]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <Title>Our Services</Title>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([name, icon, desc]) => (
              <div
                key={name}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-md"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0b1f3a] text-xl">
                  {icon}
                </div>
                <h3 className="text-sm font-bold uppercase text-[#0b1f3a]">{name}</h3>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET & RATES */}
      <section id="fleet" className="mx-auto max-w-6xl px-4 py-16">
        <Title>Our Fleet &amp; Rates (Per KM)</Title>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {fleet.map(([name, img, rate, seats]) => (
            <a
              key={name}
              href={carWaLink(name, rate.startsWith("₹") ? `${rate}/km` : rate)}
              target="_blank"
              className="group block overflow-hidden rounded-xl border border-slate-200 bg-white text-center shadow-sm transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
            >
              <h3 className="pt-4 text-sm font-extrabold uppercase text-[#0b1f3a]">{name}</h3>
              <div className="relative mx-auto mt-2 h-28 w-full">
                <Image src={`${BASE_PATH}${img}`} alt={name} fill className="object-contain" />
              </div>
              <p className="text-xs text-slate-500">{seats}</p>
              <p className="pt-1 text-xl font-extrabold text-amber-500">
                {rate}
                {rate.startsWith("₹") && (
                  <span className="text-sm font-bold text-slate-700"> / KM</span>
                )}
              </p>
              <p className="mb-3 mt-2 inline-block rounded-full bg-green-500 px-3 py-1 text-[11px] font-bold text-white">
                💬 Book this car
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-[#0b1f3a] py-16">
  {/* Background Pattern */}
  <div
    className="absolute inset-0 opacity-[0.06]"
    style={{
      backgroundImage:
        "radial-gradient(circle at 25% 25%,#fff 1px,transparent 1px),radial-gradient(circle at 75% 75%,#fff 1px,transparent 1px)",
      backgroundSize: "42px 42px",
    }}
  />

  <div className="relative mx-auto max-w-7xl px-4">

    {/* Heading */}
    <div className="mb-12 flex items-center justify-center gap-4">
      <span className="hidden h-px w-20 bg-amber-400 sm:block" />
      <h2 className="text-center text-3xl font-extrabold uppercase tracking-wide text-white">
        Why Choose Us?
      </h2>
      <span className="hidden h-px w-20 bg-amber-400 sm:block" />
    </div>

    <div className="grid items-center gap-12 lg:grid-cols-[380px_1fr]">

      {/* LEFT IMAGE */}
      <div className="mx-auto w-full max-w-[380px]">

        <div className="overflow-hidden rounded-[28px] border-2 border-amber-400 bg-gradient-to-b from-[#16355d] to-[#0b1f3a] shadow-2xl">

          <div className="relative h-[420px]">

            <Image
              src={`${BASE_PATH}/images/HardLogo.png`}
              alt="Professional Driver"
              fill
              priority
              className="object-contain object-bottom h-full w-full"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 380px"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b1f3a] via-[#0b1f3a]/60 to-transparent p-5">

              <div className="rounded-full bg-amber-400 py-2 text-center text-xs font-extrabold uppercase tracking-wider text-slate-900">

                ⭐ Trusted by 10,000+ Happy Riders

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT CONTENT */}
      <div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {whyChoose.map(([l1, l2, icon]) => (
            <div
              key={l1}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-amber-400 hover:bg-white/10"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-amber-400 text-2xl text-amber-400">
                {icon}
              </div>

              <div>
                <h3 className="text-sm font-bold text-white">
                  {l1}
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  {l2}
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="#contact"
            className="rounded-xl bg-amber-400 px-7 py-3 font-bold text-slate-900 transition hover:bg-amber-300"
          >
            📞 BOOK NOW
          </a>

          <a
            href={WA}
            target="_blank"
            className="rounded-xl border border-white/20 bg-white/5 px-7 py-3 font-bold text-white transition hover:bg-white/10"
          >
            💬 WhatsApp Us
          </a>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16">
        <Title>What Our Clients Say</Title>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map(([name, text]) => (
            <div key={name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-amber-400">⭐⭐⭐⭐⭐</div>
              <p className="mt-3 text-sm italic text-slate-700">&ldquo;{text}&rdquo;</p>
              <p className="mt-4 text-sm font-bold text-[#0b1f3a]">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT + MAP */}
      <section id="contact" className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 lg:grid-cols-2">

          {/* LEFT */}
          <div className="flex h-fit flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-lg fit-content">

            <div className="mb-3">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">
                Instant Booking
              </span>

              <h2 className="mt-3 text-3xl font-extrabold uppercase text-[#0b1f3a]">
                Book Your Taxi
              </h2>

              <p className="mt-2 text-sm text-slate-600">
                Fill in your trip details and we'll instantly prepare your booking.
                After submitting, WhatsApp will open automatically.
              </p>
            </div>

            <BookingForm />

            {/* Bottom fills remaining height */}
            <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="grid grid-cols-2 gap-3 text-sm lg:grid-cols-4">
                <div className="flex flex-col items-center rounded-lg bg-white p-3">
                  <span className="text-2xl">🚖</span>
                  <span className="mt-1 font-semibold">Clean Cars</span>
                </div>

                <div className="flex flex-col items-center rounded-lg bg-white p-3">
                  <span className="text-2xl">🧑‍✈️</span>
                  <span className="mt-1 font-semibold">Verified Drivers</span>
                </div>

                <div className="flex flex-col items-center rounded-lg bg-white p-3">
                  <span className="text-2xl">💰</span>
                  <span className="mt-1 font-semibold">Best Fare</span>
                </div>

                <div className="flex flex-col items-center rounded-lg bg-white p-3">
                  <span className="text-2xl">⏰</span>
                  <span className="mt-1 font-semibold">24×7 Service</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6">

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">

              <h2 className="text-2xl font-extrabold uppercase text-[#0b1f3a]">
                Contact Us
              </h2>

              <div className="mt-5 space-y-3">

                <div className="flex items-center gap-3">
                  <span className="text-3xl">📞</span>
                  <span className="text-3xl font-extrabold text-[#0b1f3a]">
                    {PHONE1}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-3xl">📞</span>
                  <span className="text-3xl font-extrabold text-[#0b1f3a]">
                    {PHONE2}
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xl">📍</span>
                  <span className="text-slate-600">
                    Indore, Madhya Pradesh
                  </span>
                </div>

              </div>

              <a
                href={WA}
                target="_blank"
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-green-500 px-6 py-3 text-base font-bold text-white transition hover:bg-green-600"
              >
                💬 Chat on WhatsApp
              </a>

            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <iframe
                title="Indore Map"
                className="h-[292px] w-full"
                loading="lazy"
                src="https://maps.google.com/maps?q=Indore%2C%20Madhya%20Pradesh&t=&z=12&ie=UTF8&iwloc=&output=embed"
              />
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <Title>FAQ</Title>
        <div className="space-y-3">
          {faqs.map(([q, a]) => (
            <details
              key={q}
              className="group rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-sm font-bold text-[#0b1f3a]">
                Q. {q}
              </summary>
              <p className="mt-2 text-sm text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* BANNER */}
      <section className="relative isolate overflow-hidden bg-[#0b1f3a] py-12">
        <Image src={`${BASE_PATH}/images/banner.jpg`} alt="banner" fill className="object-cover opacity-40" />
        <div className="relative text-center text-xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
          Safe Journey • Best Price • 24×7 Taxi Service
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#08182c] py-12 text-slate-300">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
          <div>
            <div className="inline-block rounded-lg bg-white p-2">
              <Image
                src={`${BASE_PATH}/images/logo.png`}
                alt="Shree Sawariya Taxi Services Indore"
                width={220}
                height={100}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="mt-3 text-sm">📍 Indore, Madhya Pradesh</p>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase text-white">Quick Links</h4>
            <ul className="space-y-1.5 text-sm">
              {["Home", "About", "Services", "Destinations", "Fleet", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-amber-400">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-bold uppercase text-white">Contact Info</h4>
            <p className="text-sm">📞 {PHONE1}</p>
            <p className="text-sm">📞 {PHONE2}</p>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Shri Sanvariya Taxi Service. All Rights Reserved.
        </p>
      </footer>


      <ChatBot />
    </main>
  );
}
