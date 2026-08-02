export const WA_NUMBER = "919826111707"; // WhatsApp number in international format (without + or 00)

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function carWaLink(car: string, rate: string) {
  return waLink(
    `Hello Shri Sanvariya Taxi Service 🙏\nI am interested in booking *${car}* (${rate}).\nPlease share availability and fare details.`,
  );
}

const P = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200`;

export type Slide = { name: string; img: string; note: string; tag: string; emoji: string };

export const slides: Slide[] = [
  // Indore City
  {
    name: "Rajwada Palace",
    emoji: "🏰",
    img: P(38548152),
    note: "Heritage · 5 km",
    tag: "Indore City",
  },
  {
    name: "Lal Bagh Palace",
    emoji: "🏛️",
    img: P(15623165),
    note: "Heritage · 7 km",
    tag: "Indore City",
  },
  {
    name: "Sarafa & 56 Dukan",
    emoji: "🍲",
    img: P(34836608),
    note: "Food Street · 6 km",
    tag: "Indore City",
  },
  {
    name: "Patalpani Waterfall",
    emoji: "💦",
    img: P(27877683),
    note: "Nature · 35 km",
    tag: "Indore City",
  },
  // Madhya Pradesh
  {
    name: "Ujjain Mahakaleshwar",
    emoji: "🕉️",
    img: P(38087489),
    note: "55 km · ₹2200 approx",
    tag: "Madhya Pradesh",
  },
  {
    name: "Omkareshwar Jyotirlinga",
    emoji: "🛕",
    img: P(31739736),
    note: "80 km · ₹2800 approx",
    tag: "Madhya Pradesh",
  },
  {
    name: "Maheshwar & Mandu",
    emoji: "🏞️",
    img: P(35851108),
    note: "95 km · ₹3200 approx",
    tag: "Madhya Pradesh",
  },
  {
    name: "Maheshwar Narmada Ghat",
    emoji: "🚩",
    img: P(32378252),
    note: "90 km · ₹3000 approx",
    tag: "Madhya Pradesh",
  },
  {
    name: "Bhopal",
    emoji: "🌆",
    img: P(37245905),
    note: "195 km · ₹5500 approx",
    tag: "Madhya Pradesh",
  },
  { name: "Orchha Fort", emoji: "🏯", img: P(20000880), note: "480 km", tag: "Madhya Pradesh" },
  // All India Tour
  { name: "Shirdi Sai Baba", emoji: "🙏", img: P(31050818), note: "460 km", tag: "All India Tour" },
  { name: "Statue of Unity", emoji: "🗿", img: P(31836726), note: "390 km", tag: "All India Tour" },
  { name: "Udaipur", emoji: "⛵", img: P(27960113), note: "480 km", tag: "All India Tour" },
  { name: "Goa", emoji: "🌴", img: P(32262431), note: "1000 km", tag: "All India Tour" },
];
