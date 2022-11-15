import React from "react";
import FeedbackItem from "./FeedbackItem";

import { useContext } from "react";

import FeedbackContext from "../context/FeedbackContext";
import { GlobalContentFeedbackType } from "../context/FeedbackContext";

function FeedbackList() {
  // * Take Context
  const { feedback, isLoading } = useContext(
    FeedbackContext
  ) as GlobalContentFeedbackType;

  console.log(feedback);

  // ! Add animaions with framer motion
  if (!feedback || feedback.length === 0) {
    return <div>No feedback</div>;
  } else {
    return isLoading ? (
      <div
        className="spinner-container"
        style={{
          fontSize: "64px",
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <i className="fas fa-spinner fa-spin"></i>
      </div>
    ) : (
      <div>
        {feedback.map((item: any) => {
          return <FeedbackItem item={item} key={item.id} />;
        })}
      </div>
    );
  }
}

export default FeedbackList;
