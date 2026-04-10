import { submitFeedback } from "../actions/feedback";
import SubmitButton from "./SubmitButton";

export default function FeedbackForm() {
  return (
    <form action={submitFeedback as any} className="form">
      <h2>Feedback Form</h2>

      <input name="name" placeholder="Your Name" required />
      <textarea name="message" placeholder="Your Feedback" required />

      <select name="rating">
        <option value="1">⭐ 1</option>
        <option value="2">⭐⭐ 2</option>
        <option value="3">⭐⭐⭐ 3</option>
        <option value="4">⭐⭐⭐⭐ 4</option>
        <option value="5">⭐⭐⭐⭐⭐ 5</option>
      </select>

      <SubmitButton />
    </form>
  );
}