import { createContext, useState, useEffect } from "react";

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
  const [isLoading, setIsLoading] = useState(false);

  // * Fetch feedback from API
  // useEffect(() => {
  //   fetchFeedback();
  // }, []);

  // const fetchFeedback = async () => {
  //   const res = await fetch("http://localhost:3000/api/feedback");
  //   const data = await res.json();
  //   setFeedback(data);
  //   setIsLoading(false);
  // };

  // * ADD
  const addFeedback = (newFeedback: any) => {
    // * ADD Fetch
    // const res = await fetch("http://localhost:3000/api/feedback", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newFeedback),
    // });

    // const data = await res.json();
    // setFeedback([...feedback, data]);

    setFeedback([newFeedback, ...feedback]);
  };

  // * DELETE
  const deleteFeedback = (id: number) => {
    // * DELETE Fetch
    // await fetch(`http://localhost:3000/api/feedback/${id}`, {
    //   method: "DELETE",
    // });

    setFeedback(feedback.filter((item) => item.id !== id));
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
    // * UPDATE Fetch
    // const res = await fetch(`http://localhost:3000/api/feedback/${id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(updItem),
    // });
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
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
