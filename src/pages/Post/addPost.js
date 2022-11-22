import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { addPost, getDetailPostById } from "../../Axios/postAxios";
const AddPost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  console.log(title, body)

  const id = Number(useParams().id);

  const { addNewPostResult } = useSelector((state) => state.postReducers);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addHandler = (event) => {
    // console.log("1. Mulai");
    dispatch(addPost(id, title, body));
    Swal.fire({
      icon: "success",
      title: "Add Post Success!",
      text: `You've successfully created Post!`,
    });
    navigate(`/user/detail/${id}`);
  };

  useEffect(() => {
    if (addNewPostResult) {
      // console.log("5. Masukk Component did update");
      dispatch(getDetailPostById(id));
    }
  }, [addNewPostResult, dispatch]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3" data-cy="todo-back-button">
            <Link to={`/user/detail/${id}`}>
              <MdOutlineKeyboardArrowLeft
                style={{
                  position: "absolute",
                  width: "32px",
                  height: "32px",
                  bottom: "500px",
                  left: "209px",
                  top: "159px",
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
                left: "245px",
                top: "148px",
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
              New Post
            </h1>
          </div>
        </div>
        <div className="row">
          <div
            class="card"
            style={{
              position: "absolute",
              height: "390px",
              width: "830px",
              left: "220px",
              top: "250px",
              boxShadow: " 0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "12px",
            }}
          >
            <div className="row">
              <div
                className="col-6"
                style={{
                  position: "absolute",
                  width: "146px",
                  height: "346px",
                  left: "200px",
                  top: "35px",

                  transform: "matrix(-1, 0, 0, 1, 0, 0)",
                }}
              >
                <svg
                  width="146"
                  height="346"
                  viewBox="0 0 146 346"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M144.592 114.122C143.917 113.057 143.029 112.15 141.986 111.46C140.943 110.77 139.769 110.313 138.54 110.117C137.312 109.922 136.057 109.994 134.858 110.328C133.658 110.661 132.541 111.25 131.581 112.054C131.278 112.31 130.992 112.587 130.728 112.884L96.0409 107.736L94.1105 81.1448C93.9627 79.1047 93.026 77.2081 91.5066 75.8722C89.9871 74.5362 88.0093 73.8703 86.0082 74.021C84.0072 74.1716 82.1468 75.1266 80.8364 76.6756C79.5259 78.2247 78.8728 80.241 79.0206 82.281C79.024 82.3283 79.0279 82.3756 79.0321 82.4229L82.4134 119.735L82.4297 119.818C82.8697 121.253 83.7516 122.504 84.9445 123.387C86.1374 124.27 87.5777 124.737 89.0517 124.719L129.851 124.001C130.009 124.248 130.18 124.486 130.362 124.714C131.152 125.693 132.135 126.492 133.248 127.057C134.361 127.622 135.578 127.941 136.821 127.992C138.063 128.044 139.302 127.828 140.457 127.358C141.611 126.887 142.655 126.173 143.52 125.263C143.696 125.08 143.862 124.89 144.019 124.695C145.195 123.218 145.884 121.401 145.987 119.503C146.089 117.604 145.601 115.721 144.592 114.122V114.122Z"
                    fill="#FFB7B7"
                  />
                  <path
                    d="M75.0014 337L84.4874 336.999L89 298L75 298.001L75.0014 337Z"
                    fill="#FFB7B7"
                  />
                  <path
                    d="M72.0006 346L104 345.999V345.59C104 342.251 102.687 339.049 100.352 336.688C98.016 334.327 94.8481 333 91.5449 333H91.5441L72 333.001L72.0006 346Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M5 327.832L14.6723 331L32 296.676L17.7238 292L5 327.832Z"
                    fill="#FFB7B7"
                  />
                  <path
                    d="M-1.16606e-06 335.9L30.2048 346L30.3351 345.625C31.3984 342.569 31.1797 339.223 29.727 336.324C28.2743 333.426 25.7067 331.211 22.5889 330.169L22.5881 330.168L4.14004 324L-1.16606e-06 335.9Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M63.8869 2.25751C63.8869 2.25751 73.6605 -1.02067 79.9434 12.0921C86.2264 25.2049 96 39.6289 96 39.6289L90.4151 40.9402C90.4151 40.9402 89.0189 31.7613 85.5283 30.45L86.9245 42.2515C86.9245 42.2515 45.0377 56.0199 26.1886 40.9402L26.8868 36.3507C26.8868 36.3507 24.0943 37.0064 24.0943 40.9402L22 38.9733C22 38.9733 24.0943 35.0395 30.3774 29.7944C34.5013 26.3517 35.9184 19.8021 36.4054 15.7071C36.7916 12.2403 38.2554 8.98851 40.5844 6.42373C44.7598 1.87906 52.3679 -2.95122 63.8869 2.25751Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M60 48C50.0589 48 42 39.9411 42 30C42 20.0589 50.0589 12 60 12C69.9411 12 78 20.0589 78 30C78 39.9411 69.9411 48 60 48Z"
                    fill="#FFB7B7"
                  />
                  <path
                    d="M83.8889 63.0968L87.2222 62C87.2222 62 93.8889 64.7419 93.8889 69.6774C93.8889 74.6129 95 94.3548 95 94.3548L80 96L83.8889 63.0968Z"
                    fill="#CBCBCB"
                  />
                  <path
                    d="M25.7544 170.113C27.0909 168.594 27.8453 166.639 27.8804 164.603C27.9156 162.568 27.2292 160.587 25.9461 159.022L34.9917 82.188C35.0803 80.3761 34.4565 78.6026 33.2572 77.2567C32.0579 75.9108 30.3812 75.1024 28.5949 75.0091C26.8086 74.9157 25.0588 75.545 23.7295 76.7587C22.4002 77.9725 21.5999 79.6715 21.5044 81.4831C21.5031 81.5082 21.502 81.5332 21.501 81.5583L13.4087 158.474C13.1153 158.772 12.8449 159.093 12.5999 159.434C11.9508 160.344 11.4849 161.375 11.2287 162.468C10.9725 163.561 10.9311 164.695 11.1068 165.804C11.2825 166.913 11.6719 167.977 12.2527 168.933C12.8336 169.89 13.5945 170.721 14.4921 171.379C14.5851 171.447 14.6795 171.514 14.7752 171.578C15.8144 172.275 16.9929 172.731 18.2262 172.912C19.4596 173.093 20.7171 172.994 21.9086 172.624C23.3963 172.167 24.7283 171.297 25.7544 170.113Z"
                    fill="#FFB7B7"
                  />
                  <path
                    d="M34 94L19 92.3548C19 92.3548 20.1111 72.6129 20.1111 67.6774C20.1111 62.7419 26.7778 60 26.7778 60L30.1111 61.0968L34 94Z"
                    fill="#CBCBCB"
                  />
                  <path
                    d="M82.2573 121.01C82.2573 121.01 94.9006 144.037 94.9006 171.965C94.9006 199.893 96 328.032 96 328.032C96 328.032 79.5088 335.698 69.6141 326.389L60.8187 184.56L26.1871 323.651C26.1871 323.651 9.69592 326.937 2 321.461L16.8421 224.535C16.8421 224.535 22.8889 133.633 39.3801 127.061C55.8713 120.49 82.2573 121.01 82.2573 121.01Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M79.3466 30C72.9384 25.4828 67.7511 20.28 64.3197 14.091C64.3197 14.091 52.5595 26.8182 45.3728 27.4545C38.186 28.0909 44.7194 12.1819 44.7194 12.1819L57.7863 9L70.1998 10.2727L80 16.6364L79.3466 30Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M42.3076 57.0302C42.3076 57.0302 41.7948 56.7535 72.4599 57.8761L85.2942 61.4282L87 61.9003C87 61.9003 85.3846 94.3679 81.0769 100.32C76.7693 106.273 77.8462 109.519 78.9231 110.061C80 110.602 82.6923 109.519 81.0769 112.225C79.4616 114.931 77.3077 113.307 79.4615 114.931C81.6154 116.554 82.6923 122.506 82.6923 122.506L35.3077 129C35.3077 129 33.6923 107.896 29.3846 97.0735C25.0769 86.251 24 81.922 24 81.922L27.2307 60.2769L42.3076 57.0302Z"
                    fill="#CBCBCB"
                  />
                </svg>
              </div>
              <div className="col-6">
                <div className="row">
                  <h2
                    className="modal-add-title"
                    style={{
                      position: "absolute",
                      height: "18px",
                      width: "120px",
                      left: "400px",
                      top: "50px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "12px",
                      lineHeight: "18px",
                      color: "#111111",
                    }}
                  >
                    Title
                  </h2>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                      position: "absolute",
                      height: "52px",
                      width: "400px",
                      left: "400px",
                      top: "70px",
                      border: "1px solid #16ABF8",
                      borderRadius: "6px",
                    }}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Tambahkan Title"
                  />
                </div>
                <div className="row">
                  <h2
                    className="modal-add-title"
                    style={{
                      position: "absolute",
                      height: "18px",
                      width: "120px",
                      left: "400px",
                      top: "150px",
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: "12px",
                      lineHeight: "18px",
                      /* identical to box height */

                      color: "#111111",
                    }}
                  >
                    Body
                  </h2>
                  <input
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    style={{
                      position: "absolute",
                      height: "52px",
                      width: "400px",
                      left: "400px",
                      top: "170px",
                      border: "1px solid #16ABF8",
                      borderRadius: "6px",
                    }}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Tambahkan Body"
                  />
                </div>

                <button
                  onClick={() => addHandler()}
                  type="button"
                  className="btn btn-primary"
                  data-sty="modal-add-save-button"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "13px 14px",
                    gap: "6px",

                    position: "absolute",
                    width: "150px",
                    height: "54px",
                    left: "520px",
                    top: "300px",

                    background: "#16ABF8",
                    borderRadius: "45px",
                  }}
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPost;
