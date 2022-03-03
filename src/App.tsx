import {useState, useEffect} from "react";
import { UserContext } from "./context/DataProvider";
import ChatPage from "./pages/ChatPage";

const  App=()=> {
  const [user, setUser] = useState("Jesse Hall");
  useEffect(()=>{
    const randomUserName = Math.floor(Math.random() * 1000);
    setUser(randomUserName.toString());
  }, [])
  return (
      <UserContext.Provider value={user}>
        <ChatPage/>
      </UserContext.Provider>
  );
}

export default  App;
