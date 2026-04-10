import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

export default function Home() {
  return (
    <div className="app">
      <div className="container">
        <FeedbackForm />
        <FeedbackList />
      </div>
    </div>
  );
}