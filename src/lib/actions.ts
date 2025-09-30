"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }

  const webhookUrl = process.env.WEBHOOK_URL || "https://foxxage-n8n.vl5tvz.easypanel.host/webhook/Goji";

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsed.data),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Webhook submission failed:", errorBody);
      return { success: false, message: `The server responded with an error: ${response.status}` };
    }
    
    console.log("Form submitted successfully to webhook.");
    return { success: true };

  } catch (error) {
    console.error("An error occurred while submitting the form:", error);
    return { success: false, message: "A network error occurred. Please try again." };
  }
}
