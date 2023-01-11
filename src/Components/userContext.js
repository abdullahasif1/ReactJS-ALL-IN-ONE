import React from "react";

const UserContext = React.createContext('By Default this will work')

const UserProvide = UserContext.Provider
const UserConsumer = UserContext.Consumer


export{ UserConsumer, UserProvide}


export default UserContext