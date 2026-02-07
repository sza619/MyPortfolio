export const sendTelegramAlert = async (lead: any) => {
  const BOT_TOKEN = "8563388801:AAHrfXE70TnbzleUuk-3dShYHhJzLWo1fmI";
  const CHAT_ID = "1053910027";

  const message = `
🚀 New Message

👤 Name: ${lead.name}
📧 Email: ${lead.email}

💬 Message:
${lead.message}
`;

  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  });
};
