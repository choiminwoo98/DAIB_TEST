import React, { useEffect } from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
const GET_USERS = gql`
  query GetUsers {
    allUsers {
      email
      name
      password
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(GET_USERS);
  console.log(data.allUsers[0]);
  return <div>hello</div>;
}

export default App;
