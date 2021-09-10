import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ChatEngine } from "react-chat-engine";
import { useHistory } from "react-router-dom";
import { AuthContext, useAuth } from "../contexts/AuthContext";
import { auth } from "../firebase";

export default function Chats() {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };

  const getFile = async (url) => {
    let response = await fetch(url);
    let img = await response.blob();
    return new File([img], "media.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (user === null) {
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
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users", formdata, {
              headers: {
                "private-key":"d2e1a4cd-25fa-404f-9340-cc94464f4e5b",
              },
            })
            .then(() => {
              setLoading(false);
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
  });

  if (!user || loading) return "loading...";

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Chats</div>
        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>
      <ChatEngine
        height="100vh"
        projectID="47de05f9-69fa-4aae-9e61-6481f3f4e30e"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
}
