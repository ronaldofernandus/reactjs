import React, { useState, useEffect } from "react";
import "../../index.css";
import { AiFillEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { BsTrash } from "react-icons/bs";
import {
  getUser,
  getDetailUserById,
  detailUser,
  deleteUser,
} from "../../Axios/userAxios";
import { AiOutlinePlus } from "react-icons/ai";
import Swal from "sweetalert2";
const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  const [postPerPage, setPostPerPage] = useState(5);

  const indexOfLastEmployee = currentPage * postPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - postPerPage;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const {
    getListUserResult,
    getListUserLoading,
    getListUserError,
    deleteUserReducer,
  } = useSelector((state) => state.userReducers);

  const deleteHandler = (id) => {
    // console.log("1. Mulai");
    dispatch(deleteUser(id));
    Swal.fire({
      icon: "success",
      title: "Delete Success!",
      text: `You've successfully Delete an User!`,
    });
    navigate("/");
  };

  useEffect(() => {
    if (deleteUserReducer) {
      // console.log("5. Masukk Component did update");
      dispatch(getUser());
    }
  }, [deleteUserReducer, dispatch]);

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(getListUserResult.length / postPerPage); i++) {
    pageNumber.push(i);
  }

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h1 className="todo-title">Daftar Pengguna</h1>
          </div>
          <div className="col-3">
            <Link
              to={`user/addUser`}
              type="button"
              className="btn btn-primary tambah"
              data-cy="activity-add-button"
            >
              <AiOutlinePlus
                style={{
                  position: "absolute",
                  width: "24px",
                  height: "24px",
                  flex: "none",
                  left: "10px",
                  top: "12px",
                  order: "0",
                  color: "#FFFFFF",
                  flexGrow: "0",
                }}
              />
              <h5
                className="nama"
                data-cy="Tambah"
                style={{
                  position: "absolute",
                  width: "78px",
                  height: "27px",
                  left: "40px",
                  top: "12px",
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

        <div className="row">
          <div class="table-responsive">
            <table
              class="table"
              style={{
                position: "absolute",
                width: "1000px",
                height: "auto",
                bottom: "500px",
                left: "200px",
                top: "250px",
              }}
            >
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {getListUserResult ? (
                  getListUserResult

                    .slice(indexOfFirstEmployee, indexOfLastEmployee)

                    .map((user, index) => {
                      return (
                        <>
                          <tr key={user.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>{user.status}</td>
                            <td>
                              <button
                                onClick={() => dispatch(detailUser(user))}
                                type="button"
                                className="btn btn-success"
                              >
                                <AiFillEdit></AiFillEdit>
                                <Link
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                  to={`/user/edit/${user.id}`}
                                  className="edit"
                                >
                                  Edit
                                </Link>
                              </button>
                            </td>

                            <td>
                              <button
                                onClick={() => deleteHandler(user.id)}
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
                            <td>
                              <button
                                onClick={() =>
                                  dispatch(getDetailUserById(user))
                                }
                                type="button"
                                className="btn btn-success"
                              >
                                <Link
                                  style={{
                                    textDecoration: "none",
                                    color: "white",
                                  }}
                                  to={`user/detail/${user.id}`}
                                  className="delete"
                                >
                                  View
                                </Link>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })
                ) : getListUserLoading ? (
                  <p>Loading...</p>
                ) : (
                  <p>{getListUserError ? getListUserError : "Data Kosong"}</p>
                )}
              </tbody>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  {pageNumber.map((page) => {
                    return (
                      <>
                        <li className="page-item" key={page}>
                          <button
                            onClick={() => paginate(page)}
                            className="page-link"
                            href=""
                          >
                            {page}
                          </button>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </nav>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
