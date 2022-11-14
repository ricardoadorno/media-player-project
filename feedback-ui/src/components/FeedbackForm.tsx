import React from "react";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  const [text, setText] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [rating, setRating] = React.useState(10);

  // ! Make handleTextChange better
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);

    if (event.target.value.length <= 10) {
      setMessage("Please enter at least 10 characters");
    } else {
      setMessage("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      console.log(newFeedback);
    }
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
          inventore!
        </h2>

        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Write a review"
            value={text}
          />
          {/* // ! Make Custom button */}
          {/* // ! Make Disable function */}
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
}

export default FeedbackForm;
