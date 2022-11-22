import axios from "axios";

export const getListUser = "getListUser";
export const getDetailUser = "getDetailUser";
export const addNewUser = "addNewUser";
export const DETAIL_USER = "DETAIL_USER";
export const getUserByIdReducer = "getUserByIdReducer";
export const updateUserReducer = "updateUserReducer";

export const deleteUserReducer = "deleteUserReducer";

export const getUser = (currentPage, postPerPage) => {
  const token =
    "c8897fe926d35ff95f226e67a55e46d47b82046ec681c6761e2c351edf36c744";
  return (dispatch) => {
    dispatch({
      type: "getListUser",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",

      url: "   https://gorest.co.in/public/v2/users" + "?page=" + currentPage,
      timeout: 120000,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: "getListUser",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getListUser",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getDetailUserById = (id) => {
  const token =
    "c8897fe926d35ff95f226e67a55e46d47b82046ec681c6761e2c351edf36c744";
  return (dispatch) => {
    dispatch({
      type: "getDetailUser",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: `https://gorest.co.in/public/v2/users/${id}`,
      timeout: 120000,

      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: "getDetailUser",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getDetailUser",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addUser = (data) => {
  // const API_KEY = String(process.env.API_KEY);
  const token =
    "c8897fe926d35ff95f226e67a55e46d47b82046ec681c6761e2c351edf36c744";
  return (dispatch) => {
    dispatch({
      type: "addNewUser",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      timeout: 120000,
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
        // key: API_KEY,
      },
    })
      .then((response) => {
        dispatch({
          type: "addNewUser",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "addNewUser",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailUser = (data) => {
  const token =
    "c8897fe926d35ff95f226e67a55e46d47b82046ec681c6761e2c351edf36c744";
  return (dispatch) => {
    dispatch({
      type: "DETAIL_USER",
      payload: {
        data: data,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
};

export const DetailUserById = (data) => {
  const token =
    "c8897fe926d35ff95f226e67a55e46d47b82046ec681c6761e2c351edf36c744";
  return (dispatch) => {
    dispatch({
      type: "getUserByIdReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: `https://gorest.co.in/public/v2/users` + data.id,
      timeout: 120000,

      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: "getUserByIdReducer",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getUserByIdReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const updateUser = (data) => {
  const token =
    "c8897fe926d35ff95f226e67a55e46d47b82046ec681c6761e2c351edf36c744";
  return (dispatch) => {
    dispatch({
      type: "updateUserReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "PUT",
      url: `https://gorest.co.in/public/v2/users/` + data.id,
      timeout: 120000,
      data: data,

      headers: {
        Authorization: `Bearer ${token}`,
        // key: API_KEY,
      },
    })
      .then((response) => {
        // console.log("3.Berhasi", response);
        dispatch({
          type: "updateUserReducer",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // console.log("3. Gagal", error);
        dispatch({
          type: "updateUserReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUser = (id) => {
  const token =
    "c8897fe926d35ff95f226e67a55e46d47b82046ec681c6761e2c351edf36c744";
  return (dispatch) => {
    dispatch({
      type: "deleteUserReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "DELETE",
      url: "https://gorest.co.in/public/v2/users/" + id,
      timeout: 120000,

      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: "deleteUserReducer",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3. Gagal", error);
        dispatch({
          type: "deleteUserReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
