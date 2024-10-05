import axios from "axios";
import { useEffect } from "react";

axios.defaults.headers.common['token'] = localStorage.getItem('token')

function Dashbord() {

  useEffect(() => {
    console.log('dashbord : ');
    (async function () {
      const response = await axios.get('https://reqres.in/api/unknown')
      console.log(response.data);
    })()

  }, [])
  return (
    <>
      <h1>Here is your dashbor!</h1>
    </>
  );
}

export default Dashbord;