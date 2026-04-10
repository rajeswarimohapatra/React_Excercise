"use server";

import { revalidatePath } from "next/cache";

let feedbacks: any[] = [];

export async function submitFeedback(formData: FormData) {
  const name = formData.get("name");
  const message = formData.get("message");
  const rating = formData.get("rating");

  const newFeedback = { name, message, rating };
  feedbacks.push(newFeedback);

  // 🔥 THIS IS IMPORTANT
  revalidatePath("/");

  return { success: true };
}

export async function getFeedbacks() {
  return feedbacks;
}