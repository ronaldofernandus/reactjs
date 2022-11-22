import React, { useEffect } from "react";
import "../../index.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailUserById } from "../../Axios/userAxios";
import { getDetailPostById, deletePost } from "../../Axios/postAxios";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
import Swal from "sweetalert2";
const DetailUser = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { getDetailUserResult } = useSelector((state) => state.userReducers);
  const navigate = useNavigate();
  const {
    getDetailPostResult,
    getDetailPostLoading,
    getDetailPostError,
    deletePostReducerResult,
  } = useSelector((state) => state.postReducers);
  console.log(getDetailPostResult);

  useEffect(() => {
    dispatch(getDetailUserById(id));
  }, []);
  useEffect(() => {
    dispatch(getDetailPostById(id));
  }, []);

  const deleteHandler = (id) => {
    // console.log("1. Mulai");
    dispatch(deletePost(id));
    Swal.fire({
      icon: "success",
      title: "Delete Success!",
      text: `You've successfully Delete an User!`,
    });
    navigate(`/`);
  };

  useEffect(() => {
    if (deletePostReducerResult) {
      // console.log("5. Masukk Component did update");
      dispatch(getDetailPostById());
    }
  }, [deletePostReducerResult, dispatch]);

  return (
    <>
      <div className="container">
        <div className="container">
          <div className="row">
            <div
              class="card"
              style={{
                position: "absolute",
                height: "700px",
                width: "1500px",
                left: "50px",
                top: "60px",
                boxShadow: " 0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
              }}
            >
              <div className="row">
                <div className="col-3" data-cy="todo-back-button">
                  <Link to={`/`}>
                    <MdOutlineKeyboardArrowLeft
                      style={{
                        position: "absolute",
                        width: "32px",
                        height: "32px",
                        bottom: "500px",
                        left: "auto",
                        top: "25px",
                      }}
                      size="50px"
                      color="black"
                    />
                  </Link>
                </div>
                <div className="col-3">
                  <h1
                    className="todo-title"
                    style={{
                      position: "absolute",
                      height: "54px",
                      width: "430px",
                      left: "55px",
                      top: "12px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "36px",
                      lineHeight: "54px",
                      /* identical to box height */

                      color: "#111111",
                    }}
                  >
                    {" "}
                    Detail User
                  </h1>
                </div>
              </div>
              <svg
                width="830"
                height="120"
                viewBox="0 0 830 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line y1="0.5" x2="830" y2="0.5" stroke="#E5E5E5" />
              </svg>
              <div className="row">
                <h2
                  className="modal-add-title"
                  style={{
                    position: "absolute",
                    height: "18px",
                    width: "120px",
                    left: "30px",
                    top: "108px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "18px",
                    /* identical to box height */

                    color: "#111111",
                  }}
                >
                  Nama
                </h2>
                <input
                  style={{
                    position: "absolute",
                    height: "52px",
                    width: "759px",
                    left: "43px",
                    top: "135px",
                    border: "1px solid #16ABF8",
                    borderRadius: "6px",
                  }}
                  className="form-control"
                  type="text"
                  value={
                    getDetailUserResult
                      ? getDetailUserResult.name
                      : "tipe kosong"
                  }
                  aria-label="readonly input example"
                  readonly
                />
              </div>
              <div className="row">
                <h2
                  data-sty="modal-add-priority-title  "
                  style={{
                    position: "absolute",
                    height: "18px",
                    width: "100px",
                    left: "30px",
                    top: "320px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "18px",
                    /* identical to box height */

                    color: "#111111",
                  }}
                >
                  Email
                </h2>

                <input
                  style={{
                    position: "absolute",
                    height: "52px",
                    width: "759px",
                    left: "43px",
                    top: "350px",
                    border: "1px solid #16ABF8",
                    borderRadius: "6px",
                  }}
                  value={
                    getDetailUserResult
                      ? getDetailUserResult.email
                      : "tipe kosong"
                  }
                  className="form-control"
                  type="text"
                  aria-label="readonly input example"
                  readonly
                />
              </div>
              <div className="row">
                <h2
                  data-sty="modal-add-priority-title  "
                  style={{
                    position: "absolute",
                    height: "18px",
                    width: "100px",
                    left: "30px",
                    top: "213px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "18px",
                    /* identical to box height */

                    color: "#111111",
                  }}
                >
                  Gender
                </h2>

                <input
                  style={{
                    position: "absolute",
                    height: "52px",
                    width: "759px",
                    left: "43px",
                    top: "250px",
                    border: "1px solid #16ABF8",
                    borderRadius: "6px",
                  }}
                  value={
                    getDetailUserResult
                      ? getDetailUserResult.gender
                      : "tipe kosong"
                  }
                  className="form-control"
                  type="text"
                  aria-label="readonly input example"
                  readonly
                />
              </div>
              <div className="row">
                <h2
                  data-sty="modal-add-priority-title  "
                  style={{
                    position: "absolute",
                    height: "18px",
                    width: "100px",
                    left: "30px",
                    top: "430px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "12px",
                    lineHeight: "18px",
                    /* identical to box height */

                    color: "#111111",
                  }}
                >
                  Daftar Pos
                </h2>
                <div className="container">
                  <div className="row">
                    <div className="col-3">
                      <Link
                        to={`/post/addPost/${id}`}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "13px 21px 13px 14px",
                          gap: "6px",
                          position: "absolute",
                          width: "100px",
                          height: "20px",
                          left: "640px",
                          top: "420px",
                          background: "#16ABF8",
                          borderRadius: "45px",

                          /* identical to box height */

                          color: "#111111",
                        }}
                        type="button"
                        class="btn btn-primary"
                        data-cy="activity-add-button"
                      >
                        <AiOutlinePlus
                          style={{
                            position: "absolute",
                            width: "24px",
                            height: "24px",
                            flex: "none",
                            left: "5px",
                            top: "2px",
                            order: "0",
                            color: "#FFFFFF",
                            flexGrow: "0",
                          }}
                        />
                        <h5
                          data-cy="Tambah"
                          style={{
                            position: "absolute",
                            width: "78px",
                            height: "27px",
                            left: "22px",
                            top: "2px",
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "600",
                            fontSize: "18px",
                            lineHeight: "27px",
                            /* identical to box height */
                            textAlign: "center",
                            color: "#FFFFFF",
                            flex: "none",
                            order: "1",
                            flexGrow: "0",
                          }}
                        >
                          {" "}
                          Tambah
                        </h5>
                      </Link>
                    </div>
                  </div>

                  <div className="container">
                    <div className="row">
                      <table
                        style={{
                          position: "absolute",
                          width: "700px",
                          height: "32px",
                          left: "40px",
                          top: "450px",
                        }}
                        class="table table-success table-striped"
                      >
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {getDetailPostResult ? (
                            getDetailPostResult.map((post, index) => {
                              return (
                                <>
                                  <tr key={post.user_id}>
                                    <td>
                                      {getDetailPostResult
                                        ? post.title
                                        : "Data kosong"}
                                    </td>
                                    <td>
                                      {" "}
                                      {getDetailPostResult
                                        ? post.body
                                        : "Data kosong"}
                                    </td>
                                    <td>
                                      <button
                                        onClick={() => deleteHandler(post.id)}
                                        type="button"
                                        className="btn btn-success"
                                      >
                                        <BsTrash></BsTrash>
                                        <Link
                                          style={{
                                            textDecoration: "none",
                                            color: "white",
                                          }}
                                          to={`/`}
                                          className="delete"
                                        >
                                          Delete
                                        </Link>
                                      </button>
                                    </td>
                                  </tr>
                                </>
                              );
                            })
                          ) : getDetailPostLoading ? (
                            <p>Loading...</p>
                          ) : (
                            <p>
                              {getDetailPostError
                                ? getDetailPostError
                                : "Data Kosong"}
                            </p>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailUser;
