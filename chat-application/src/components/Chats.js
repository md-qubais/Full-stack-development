import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
const Chats = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const handleLogout = async () => {
    try {
      let resp = await auth.signOut();
      history.push("/");
    } catch (error) {}
  };
  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };
  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "47de05f9-69fa-4aae-9e61-6481f3f4e30e",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        console.log("loading false");
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.displayName);
        formdata.append("secret", user.uid);
        getFile(user.photoURL)
          .then((avatar) => {
            formdata.append("avatar", avatar, avatar.name);
            axios.post("https://api.chatengine.io/users/", formdata, {
                headers: {
                  "private-key" : "d2e1a4cd-25fa-404f-9340-cc94464f4e5b",
                },
              })
              .then(() => {
                setLoading(false);
              })
              .catch((error) => {
                console.log("error here first");
                console.log(error);
              });
          })
          .catch((error) => {
              console.log("error here second")
              console.log(error)
          });
      });
  }, [user, history]);
  
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Chats</div>
        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh-66px)"
        projectID="47de05f9-69fa-4aae-9e61-6481f3f4e30e"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};
export default Chats;