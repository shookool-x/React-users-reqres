import { createContext } from "react";

const UserContext = createContext({
  users: [],
  skeluse: true,
  handleDelete: () => { },
  handleUpdate: () => { },
  handleCreate: () => { },
})

export default UserContext;