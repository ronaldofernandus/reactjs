import {
  getDetailPost,
  addNewPost,
  deletePostReducer,
} from "../../Axios/postAxios";
const initialState = {
  getDetailPostResult: false,
  getDetailPostLoading: false,
  getDetailPostError: false,

  addNewPostResult: false,
  addNewPostLoading: false,
  addNewPostError: false,

  deletePostReducerResult: false,
  deletePostReducerLoading: false,
  deletePostReducerError: false,
};

const Post = (state = initialState, action) => {
  switch (action.type) {
    case getDetailPost:
      return {
        ...state,
        getDetailPostResult: action.payload.data,
        getDetailPostLoading: action.payload.loading,
        getDetailPostError: action.payload.errorMessage,
      };

    case addNewPost:
      return {
        ...state,
        addNewPostResult: action.payload.data,
        addNewPostLoading: action.payload.loading,
        addNewPostError: action.payload.errorMessage,
      };

    case deletePostReducer:
      return {
        ...state,
        deletePostReducerResult: action.payload.data,
        deletePostReducerLoading: action.payload.loading,
        deletePostReducerError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default Post;
