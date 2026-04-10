import { getFeedbacks } from "../actions/feedback";

export default async function FeedbackList() {
  const feedbacks = await getFeedbacks();

  return (
    <div className="list">
      <h2>All Feedback</h2>

      {feedbacks.length === 0 ? (
        <p>No feedback yet</p>
      ) : (
        feedbacks.map((fb, index) => (
          <div key={index} className="card">
            <h3>{fb.name}</h3>
            <p>{fb.message}</p>
            <span>⭐ {fb.rating}</span>
          </div>
        ))
      )}
    </div>
  );
}