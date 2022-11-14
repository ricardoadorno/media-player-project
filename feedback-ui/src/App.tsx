import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";

import { useState } from "react";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <div>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList />
      </div>
    </div>
  );
}

export default App;
