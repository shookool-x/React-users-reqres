import { useContext } from "react";
import UserContext from "./contexts/userscontext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Users() {
  const usrConxt = useContext(UserContext);
  const { users } = usrConxt;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}

    >
      <button onClick={usrConxt.handleCreate} className="btn btn-lg btn-light bb">Create!</button>
      <div className="row">
        {
          users.map(item => {
            return (
              <div key={item.id} className="col-12 col-sm-6 col-md-4 p-2 text-center">
                <div className="myCard p-2">
                  <img src={item.avatar} alt="No-image" className="imgDisplay" />
                  <Link to={`/users/${item.id}`}>
                    <h4>{item.first_name} {item.last_name}</h4>
                  </Link>
                  <h5>{item.email}</h5>
                  <div className="row g-2">
                    <div className="col-12 col-sm-6">
                      <button onClick={() => { usrConxt.handleUpdate(item.id) }} className="bb btn btn-light"> Update </button>
                    </div>
                    <div className="col-12 col-sm-6">
                      <button onClick={() => { usrConxt.handleDelete(item.id) }} className="bb btn btn-light"> Delete </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </motion.div>
  );
}

export default Users;