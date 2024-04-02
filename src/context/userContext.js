import React, { createContext, useState, useEffect } from "react";

export const userContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <React.Fragment>
      <userContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </userContext.Provider>
    </React.Fragment>
  );
};

export default UserContextProvider;
