import React from "react";
import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { getCurrentUserId } from "../store/users";
import EditUserPage from "./editUserPage";
import MainPage from "./mainPage";
import UserPage from "./userPage";

const Users = () => {
  const params = useParams();
  const { userId, edit } = params;
  const currentUserId = useSelector(getCurrentUserId());

  return (
    <>
      {userId ? (
        edit ? (
          userId === currentUserId ? (
            <EditUserPage />
          ) : (
            <Redirect to={`/users/${currentUserId}/edit`} />
          )
        ) : (
          <UserPage userId={userId} />
        )
      ) : (
        <MainPage />
      )}
    </>
  );
};

export default Users;
