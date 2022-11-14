import React from "react";
import FeedbackItem from "./FeedbackItem";

// ! Fix the type of the props parameter
function FeedbackStats({ feedback }: { feedback: any[] }) {
  let avarage: any =
    feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length;

  avarage = avarage.toFixed(1).replace(/\.0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Avarege Rating: {isNaN(avarage) ? 0 : avarage}</h4>
    </div>
  );
}

export default FeedbackStats;
