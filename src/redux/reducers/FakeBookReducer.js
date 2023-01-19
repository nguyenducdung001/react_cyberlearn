import { add_comment } from "./../types/FakeBookType";
const initialState = {
  comments: [
    {
      name: "Yone",
      content: "Hi! Yasuo",
      avatar: `https://i.pravatar.cc/150?u=f`,
    },
    {
      name: "Yasuo",
      content: "Hi! brother",
      avatar: `https://i.pravatar.cc/150?u=yasuo`,
    },
  ],
};

const FakeBookReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_comment: {
      state.comments = [...state.comments, action.userComment];
      return { ...state };
    }
  }
  return { ...state };
};

export default FakeBookReducer;
