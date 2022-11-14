import React from "react";

function FeedbackItem({
  feedbackRating,
  feedbackText,
}: {
  feedbackRating: number;
  feedbackText: string;
}) {
  return (
    <div className="card">
      <div className="num-display">{feedbackRating}</div>
      <div className="text-display">{feedbackText}</div>
      <button className="close">
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
}

export default FeedbackItem;
