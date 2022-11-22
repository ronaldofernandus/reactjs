import {
  getListUser,
  getDetailUser,
  addNewUser,
  DETAIL_USER,
  getUserByIdReducer,
  updateUserReducer,
  deleteUserReducer,
} from "../../Axios/userAxios";
const initialState = {
  getListUserResult: false,
  getListUserLoading: false,
  getListUserError: false,

  getDetailUserResult: false,
  getDetailUserLoading: false,
  getDetailUserError: false,

  addNewUserResult: false,
  addNewUserLoading: false,
  addNewUserError: false,

  DETAIL_USERResult: false,

  getListUserByIdResult: false,
  getListUserByIdLoading: false,
  getListUserByIdError: false,

  updateUserReducerResult: false,
  updateUserReducerLoading: false,
  updateUserReducerError: false,

  deleteUserReducerResult: false,
  deleteUserReducerLoading: false,
  deleteUserReducerError: false,
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case getListUser:
      return {
        ...state,
        getListUserResult: action.payload.data,
        getListUserLoading: action.payload.loading,
        getListUserError: action.payload.errorMessage,
      };

    case getDetailUser:
      return {
        ...state,
        getDetailUserResult: action.payload.data,
        getDetailUserLoading: action.payload.loading,
        getDetailUserError: action.payload.errorMessage,
      };

    case addNewUser:
      return {
        ...state,
        addNewUserResult: action.payload.data,
        addNewUserLoading: action.payload.loading,
        addNewUserError: action.payload.errorMessage,
      };

    case DETAIL_USER:
      return {
        ...state,
        DETAIL_USERResult: action.payload.data,
      };

    case getUserByIdReducer:
      return {
        ...state,
        getListUserByIdResult: action.payload.data,
        getListUserByIdLoading: action.payload.loading,
        getListUserByIdError: action.payload.errorMessage,
      };

    case updateUserReducer:
      return {
        ...state,
        updateUserReducerResult: action.payload.data,
        updateUserReducerLoading: action.payload.loading,
        updateUserReducerError: action.payload.errorMessage,
      };
    case deleteUserReducer:
      return {
        ...state,
        deleteUserReducerResult: action.payload.data,
        deleteUserReducerLoading: action.payload.loading,
        deleteUserReducerError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default User;
