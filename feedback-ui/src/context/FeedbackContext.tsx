import { createContext, useState, useEffect } from "react";

interface Ifeedback {
  id: number;
  text: string;
  rating: number;
}

type Titem = {
  id: number;
  text: string;
  rating: number;
};

type TfeedbackEdit = {
  item: Titem;
  edit: boolean;
};

// ! Mudar a confusão de feedbackEdit e editFeedback
export type GlobalContentFeedbackType = {
  feedback: Ifeedback[];
  feedbackEdit: TfeedbackEdit;
  isLoading: boolean;
  deleteFeedback: (id: number) => void;
  addFeedback: (newFeedback: any) => void;
  editFeedback: (item: {}) => void;
  updateFeedback: (id: number, updItem: any) => void;
};

const FeedbackContext = createContext<GlobalContentFeedbackType | null>(null);

export const FeedbackProvider = ({ children }: any) => {
  const [feedback, setFeedback] = useState<Ifeedback[]>([
    {
      id: 1,
      text: "This is a test feedback",
      rating: 5,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // * FETCH feedback from API
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
  const [feedbackEdit, setFeedbackEdit] = useState<TfeedbackEdit | null>({
    item: {},
    edit: false,
  });
  const editFeedback = (item: any) => {
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
