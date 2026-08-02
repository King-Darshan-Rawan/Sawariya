import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const pickup = String(body.pickup ?? "").trim();
  const drop = String(body.drop ?? "").trim();
  const datetime = String(body.datetime ?? "").trim();
  const carType = body.carType ? String(body.carType) : "";
  const tripType = body.tripType ? String(body.tripType) : "";
  const source = body.source ? String(body.source) : "Website";

  if (!name || !phone || !pickup || !drop || !datetime) {
    return NextResponse.json(
      { error: "Please fill all required fields." },
      { status: 400 }
    );
  }

  const message =
`🚖 *New Taxi Booking*

👤 Name: ${name}
📞 Phone: ${phone}
${tripType ? `🛣️ Trip: ${tripType}\n` : ""}📍 Pickup: ${pickup}
🏁 Drop: ${drop}
📅 Date & Time: ${datetime}
${carType ? `🚗 Car: ${carType}\n` : ""}
🌐 Source: ${source}`;

  const whatsappUrl =
    `https://wa.me/919826111707?text=${encodeURIComponent(message)}`;

  return NextResponse.json({
    ok: true,
    whatsappUrl,
  });
}