import React from "react";
import FeedbackItem from "./FeedbackItem";

import { useContext } from "react";

import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  // * Take Context
  const { feedback } = useContext(FeedbackContext);

  console.log(feedback);

  if (!feedback || feedback.length === 0) {
    return <div>No feedback</div>;
  } else {
    return (
      // ! Add animaions with framer motion

      <div>
        {feedback.map((item: any) => {
          return <FeedbackItem item={item} key={item.id} />;
        })}
      </div>
    );
  }
}

export default FeedbackList;
