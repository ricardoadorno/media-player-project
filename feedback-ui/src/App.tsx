import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";

import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";

import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  // const addFeedback = (newFeedback: any) => {
  //   newFeedback.id = feedback.length + 1;
  //   setFeedback([newFeedback, ...feedback]);
  // };

  return (
    <FeedbackProvider>
      <Header text="Feedback UI" />
      <div className="container">
        <FeedbackForm />

        <FeedbackStats feedback={feedback} />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  );
}

export default App;
