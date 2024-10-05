import { useNavigate } from "react-router-dom";
import Logincls from "./logincls";

function WithNavigate() {

  const navigate = useNavigate();
  return (
    <Logincls navigate={navigate}></Logincls>
  );

}

export default WithNavigate;