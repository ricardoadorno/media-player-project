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

  // * DELETE
  const deleteFeedback = (id: number) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  // * ADD
  const addFeedback = (newFeedback: any) => {
    setFeedback([newFeedback, ...feedback]);
  };

  // * EDIT
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  // * UPDATE
  const updateFeedback = (id: number, updItem: any) => {
    setFeedback(feedback.map((item) => (item.id === id ? updItem : item)));
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
        feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
