import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export const UserData = () => {
  return useContext(UserContext);
};

export const UserProvider = (props) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <UserContext.Provider value={{ data, setData }}>
      {props.children}
    </UserContext.Provider>
  );
};
