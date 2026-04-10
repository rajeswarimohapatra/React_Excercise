"use server";

let feedbacks: any[] = [];

export async function submitFeedback(formData: FormData) {
  const name = formData.get("name");
  const message = formData.get("message");
  const rating = formData.get("rating");

  const newFeedback = { name, message, rating };
  feedbacks.push(newFeedback);

  return { success: true };
}

export async function getFeedbacks() {
  return feedbacks;
}