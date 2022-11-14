import { createContext, useState } from "react";

interface AppContextInterface {
  feedback: {
    id: number;
    text: string;
    rating: number;
  };
}

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }: any) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is a test feedback",
      rating: 5,
    },
  ]);

  const deleteFeedback = (id: number) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback: any) => {
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
