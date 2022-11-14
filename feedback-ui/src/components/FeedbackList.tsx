import React from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackData from "../data/FeedbackData";

function FeedbackList() {
  if (!FeedbackData || FeedbackData.length === 0) {
    return <div>No feedback</div>;
  } else {
    return (
      // ! Add animaions with framer motion

      <div>
        {FeedbackData.map((feedback) => {
          return (
            <FeedbackItem
              feedbackRating={feedback.rating}
              feedbackText={feedback.text}
              key={feedback.id}
            />
          );
        })}
      </div>
    );
  }
}

export default FeedbackList;
