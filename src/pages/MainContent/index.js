import React from "react";
import Navbar from "../../components/Navbar/index";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import DetailUser from "../../pages/Home/detailUser";
import AddUser from "../../pages/Home/addUser";
import AddPost from "../../pages/Post/addPost";

import EditUser from "../../pages/Home/editUser";

const MainContent = () => {
  return (
    <>
      <div className="test">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="user">
            <Route path="addUser" element={<AddUser />} />
            <Route path="detail">
              <Route path=":id" element={<DetailUser></DetailUser>}></Route>
            </Route>
            <Route path="edit">
              <Route path=":id" element={<EditUser></EditUser>}></Route>
            </Route>
            <Route path="delete">
              <Route path=":id"></Route>
            </Route>
          </Route>

          <Route path="post">
            <Route path="addPost">
              <Route path=":id" element={<AddPost></AddPost>}></Route>
            </Route>
            <Route path="detail">
              <Route path=":id" element={<DetailUser></DetailUser>}></Route>
            </Route>

            <Route path="delete">
              <Route path=":id"></Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default MainContent;
