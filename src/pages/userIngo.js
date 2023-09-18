import React, { useState, useEffect } from "react";
import axios from "axios";

function UserInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://eatit-backend.azurewebsites.net/api/user") //api 데이터
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  if (!user) 
  return 
  <div>
    <h1>사용자 정보를
       불러오는 중입니다...</h1>
  </div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default UserInfo;
