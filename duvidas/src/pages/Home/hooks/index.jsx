import { useEffect, useState } from "react";
import axios from "axios";

export function useHomePage() {
  const [users, setUsers] = useState([]);
  const url = "https://65a5c2b574cf4207b4eee269.mockapi.io/users";

  const fetchUsers = async () => {
    const users = await axios.get(url);
    setUsers(users.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users };
}
