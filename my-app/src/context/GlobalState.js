import React, { createContext, useReducer, useState } from "react";

//Initial State
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || "",
  jwt: JSON.parse(localStorage.getItem("JWT")) || "",
};

// TODO look to see if we can Use the Initial State decs to set the default 'x-auth-token' header

//Create a new Context
export const GlobalContext = createContext(initialState);

//Create a global Provider
export const GlobalProvider = function (props) {
  // const [state, dispatch] = useReducer(AppReducer, initialState);

  //Create the user State
  const [user, setUser] = useState(initialState.user);
  //Create the JWT state
  const [jwt, setJWT] = useState(initialState.jwt);
  //Create the Groups State
  const [currentGroup, setCurrentGroup] = useState(initialState.currentGroup);

  //ACTIONS

  //Function used to store the JWT token from the API responce
  function storeJWT(webToken) {
    if (webToken === undefined) return;
    localStorage.setItem("JWT", JSON.stringify(webToken));
    setJWT(webToken);
  }

  //Login function used to store userData in global state
  function logIn(userObject, webToken) {
    if (userObject === undefined) return;
    setUser(userObject);
    localStorage.setItem("user", JSON.stringify(userObject));
    localStorage.setItem("school", JSON.stringify(userObject.school));
    storeJWT(webToken);

    //Gather the group info from
    // let curGroups = [];
    // userObject.groups.map((g) => {
    //   curGroups.push(g.group_ID);
    // });
    // selectGroup(curGroups);
  }

  function selectGroup(curGroups) {
    localStorage.setItem("currentGroup", JSON.stringify(curGroups));
    console.log(curGroups);
    setCurrentGroup(curGroups);
  }

  //What the GlobalProvider componet 'renders'
  return (
    <GlobalContext.Provider
      value={{
        user: user,
        jwt: jwt,
        logIn,
        storeJWT,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
