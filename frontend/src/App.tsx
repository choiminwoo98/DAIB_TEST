import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import SignIn from "./page/Auth/SignIn";
import SignUp from "./page/Auth/SignUp";
import ChatRoom from "./page/chatRoom";
import Layout from "./components/Layout";
// import { useQuery, gql } from "@apollo/client";
// const GET_USERS = gql`
//   query GetUsers {
//     allUsers {
//       email
//       name
//       password
//     }
//   }
// `;
function App() {
  // const { loading, error, data } = useQuery(GET_USERS);
  // console.log(data);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/Auth/signin" element={<SignIn />} />
        <Route path="/Auth/signup" element={<SignUp />} />
        <Route path="/Chat/:id" element={<ChatRoom />} />
      </Route>
    </Routes>
  );
}

export default App;
