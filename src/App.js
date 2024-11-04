import { useEffect } from "react";
import PageRouter from "./router";

function App() {

  // useEffect (()=>{
  //   localStorage.setItem("courses",JSON.stringify([
  //     {
  //       name:"ramesh",
  //       role:"ui/ux developer",
  //       email:'ramsh@gmail.com',
  //       phoneNumber:"545",
  //       status:"ejh",
  //       selectedCourse:"jkshkje"
  //     }
  //   ]))
  // },[])
  return (
      <PageRouter />
    
  );
}

export default App;
