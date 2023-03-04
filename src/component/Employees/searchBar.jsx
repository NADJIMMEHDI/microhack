import { useState } from "react";
import { UserInfos } from "../AdminProfile/data";

const searchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = UserInfos.filter(
    (user) =>
      user.Username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.Occupation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleChange} />
      {filteredUsers.map((user) => (
        <div key={user.ID}>
          {user.Profile}
          <p>{user.Username}</p>
          <p>{user.Email}</p>
          <p>{user.Occupation}</p>
          <p>{user.Contact}</p>
        </div>
      ))}
    </div>
  );
}
export default searchBar;
