import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";

import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback: any) => {
    newFeedback.id = feedback.length + 1;
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <div>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackForm />

        <FeedbackStats feedback={feedback} />
        <FeedbackList />
      </div>
    </div>
  );
}

export default App;
