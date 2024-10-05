import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import UserContext from "./components/contexts/userscontext";

import Users from "./components/users";
import Navbar from "./components/navbar";
// import Login from "./components/login";
import Oneuser from "./components/takuser";
import WithNavigate from "./components/vaset"
import Dashbord from "./components/dashbord";
import Logout from "./components/logout";

function App() {

  const [users, setUsers] = useState([]);
  const [skeluse, setSkelet] = useState(true);
  const [userIn, setUserIn] = useState(null);

  useEffect(() => {

    async function fetching() {
      const myusers = await axios.get('https://reqres.in/api/users');
      setUsers(myusers.data.data);
      setSkelet(false)
    }
    async function tokenCheck(token) {
      if (!token) {
        setUserIn(null);
        return;
      }
      // const response = await axios.post('url', token);
      const response = {
        data: {
          user: {
            name: 'Amir',
            email: 'amirrostami.b1994@gmail.com'
          }
        }
      }
      if (!response.data.user) {
        setUserIn(null);
        return;
      }
      setUserIn(response.data.user)
    }

    fetching();

    const token = localStorage.getItem('token')
    tokenCheck(token);



  }, []);



  return (
    <UserContext.Provider value={{
      users: users,
      skeluse: skeluse,
      handleDelete: handleDelete,
      handleUpdate: handleUpdate,
      handleCreate: handleCreate,
    }}>
      <Router>
        <Navbar userIn={userIn} />
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<Users />} />
          <Route path="/dashbord" element={userIn ? <Dashbord /> : <Navigate to="/login" />} />
          <Route path="/logout" element={userIn ? <Logout logouthndl={logouthndl} /> : <Navigate to="/login" />} />
          <Route path="/users/:id" element={<Oneuser />} />
          <Route path="/login" element={!userIn ? <WithNavigate /> : <Navigate to="/dashbord" />} />
        </Routes>
      </Router>

    </UserContext.Provider>
  );

  async function handleDelete(id) {
    setUsers((prevUsers) => prevUsers.filter(item => Number(item.id) !== Number(id)));
  }

  function handleUpdate(id) {
    const index = users.findIndex(item => Number(item.id) === id);
    const newUsrs = [...users];
    newUsrs[index].email = "Removed Email!";
    setUsers(newUsrs);
  }


  async function handleCreate() {
    const newMember = {
      email: "amirrostami.b1994@gmail.com",
      first_name: "Amir",
      last_name: "Rostami",
      avatar: "https://picsum.photos/100"
    }
    const resforNew = await axios.post('https://reqres.in/api/users', newMember)
    const makeNew = [...users, resforNew.data];
    setUsers(makeNew);
  }

  function logouthndl() {
    localStorage.removeItem('token');
    window.location.replace('/');
  }


}

export default App;