import axios from "axios";
export const deletePostReducer = "deletePostReducer";
export const getDetailPost = "getDetailPost";
export const addNewPost = "addNewPost";
export const getDetailPostById = (id) => {
  const token =
    "c8897fe926d35ff95f226e67a55e46d47b82046ec681c6761e2c351edf36c744";
  return (dispatch) => {
    dispatch({
      type: "getDetailPost",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "GET",
      url: `https://gorest.co.in/public/v2/users/${id}/posts`,
      timeout: 120000,

      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: "getDetailPost",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "getDetailPost",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addPost = (id, title, body) => {
  // const API_KEY = String(process.env.API_KEY);
  const token =
    "c8897fe926d35ff95f226e67a55e46d47b82046ec681c6761e2c351edf36c744";
  return (dispatch) => {
    dispatch({
      type: "addNewPost",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "POST",
      url: `https://gorest.co.in/public/v2/users/${id}/posts`,
      timeout: 120000,
      data: { title, body },
      headers: {
        Authorization: `Bearer ${token}`,
        // key: API_KEY,
      },
    })
      .then((response) => {
        dispatch({
          type: "addNewPost",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: "addNewPost",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deletePost = (id) => {
  const token =
    "c8897fe926d35ff95f226e67a55e46d47b82046ec681c6761e2c351edf36c744";
  return (dispatch) => {
    dispatch({
      type: "deletePostReducer",
      payload: {
        loading: false,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: "DELETE",
      url: `https://gorest.co.in/public/v2/users/${id}/posts`,
      timeout: 120000,

      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        dispatch({
          type: "deletePostReducer",
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
          type: "deletePostReducer",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
