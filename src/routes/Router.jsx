import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { SignIn } from "../pages/SignIn";
import { NewTask } from "../pages/NewTask";
import { NewList } from "../pages/NewList";
import { EditTask } from "../pages/EditTask";
import { SignUp } from "../pages/SignUp";
import { EditList } from "../pages/EditList";

const AuthRouter = () => {
  const auth = useSelector((state) => state.auth.isSignIn);
  if (!auth) {
    return <Navigate to="/signin" />;
  }
};

export const Router = () => {
  // const auth = useSelector((state) => state.auth.isSignIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        {/* {auth ? (
          <> */}
        <Route
          exact
          path="/"
          element={
            <AuthRouter>
              <Home />
            </AuthRouter>
          }
        />
        <Route
          exact
          path="/task/new"
          element={
            <AuthRouter>
              <NewTask />
            </AuthRouter>
          }
        />
        <Route
          exact
          path="/list/new"
          element={
            <AuthRouter>
              <NewList />
            </AuthRouter>
          }
        />
        <Route
          exact
          path="/lists/:listId/tasks/:taskId"
          element={
            <AuthRouter>
              <EditTask />
            </AuthRouter>
          }
        />
        <Route
          exact
          path="/lists/:listId/edit"
          element={
            <AuthRouter>
              <EditList />
            </AuthRouter>
          }
        />
        {/* </>
        ) : (
          <Route component={<Navigate to="/signin" />} />
        )} */}
        <Route component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
};
