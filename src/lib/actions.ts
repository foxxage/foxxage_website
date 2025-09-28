"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: "Invalid form data." };
  }
  
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log the data and return a success message.
  
  console.log("Form submitted:", parsed.data);

  // You can randomly simulate an error for testing
  // if (Math.random() > 0.5) {
  //   return { success: false, message: "A simulated server error occurred." };
  // }

  return { success: true };
}
