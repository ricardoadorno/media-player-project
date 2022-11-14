import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }: any) {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
}

export default FeedbackItem;
