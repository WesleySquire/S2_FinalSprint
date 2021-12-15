import React from "react";
import Profile from "./Profile";

export default function Users() {
  var users = [
    {
      id: "1",
      login: "alan",
      email: "alan@gmail.com",
      picture: "https://avatars.githubusercontent.com/u/1?v=4",
      password: "pass",
      bio: "Im Alans123's bio!",
      posts: ["Hello I'm Alans first post", "Hello I'm Alans second post!"],
    },
    {
      id: "2",
      login: "John123",
      email: "John@gmail.com",
      picture: "https://avatars.githubusercontent.com/u/2?v=4",
      password: "pass",
      bio: "Im John123's bio!",
      posts: ["Hello I'm Alans first post", "Hello I'm Alans second post!"],
    },
    {
      id: "3",
      login: "Chrisitina123",
      email: "christina@gmail.com",
      picture: "https://avatars.githubusercontent.com/u/3?v=4",
      password: "pass",
      bio: "Im Chrisitina123's bio!",
      posts: ["Hello I'm Alans first post", "Hello I'm Alans second post!"],
    },
    {
      id: "4",
      login: "admin",
      email: "admin@admin.com",
      picture: "https://avatars.githubusercontent.com/u/3?v=4",
      password: "admin",
      bio: "Admin Acc.",
      posts: ["Hello I'm admins first post", "Hello I'm admins second post!"],
    },
  ];
  return users;
}
