import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, } from "react";
import UserContext from './contexts/userscontext'

function Oneuser() {

  const parameter = useParams();
  const nId = parseInt(parameter.id);
  const usrContex = useContext(UserContext);
  const navigate = useNavigate()

  const { users, handleDelete, handleUpdate } = usrContex;
  const index = users.findIndex(item => Number(item.id) === nId);


  if (index !== -1) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="d-flex justify-content-center align-items-center p-2">
          <div className="col-12 col-sm-6 myCard p-2 text-center">
            <img src={users[index].avatar} alt="No-image" className="imgDisplay" />
            <div>
              <h4>{users[index].first_name} {users[index].last_name}</h4>
            </div>
            <h5>{users[index].email}</h5>
            <div className="row g-2">
              <div className="col-12 col-sm-4">
                <button onClick={() => { handleUpdate(nId) }} className="bb btn btn-light"> Update </button>
              </div>
              <div className="col-12 col-sm-4">
                <button onClick={() => { navigate('/'); }} className="bb btn btn-light"> Allusers</button>
              </div>
              <div className="col-12 col-sm-4">
                <button onClick={() => { handleDelete(nId) }} className="bb btn btn-light"> Delete </button>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    );
  }
}

export default Oneuser;