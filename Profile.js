import React from "react";
import Users from "./LocalStorage";
import { Route, Routes, BrowserRouter as Router, Link } from "react-router-dom";

export default function Profile(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const posts = user.posts;
  if (posts === null) {
    posts = "You've never made a post!";
  } else {
    console.log(JSON.stringify(posts));
  }
  // JSON.stringify(posts);
  // const i = 0;
  // const post = [];
  // for (i; i < posts.length - 1; i++) {
  //   <li class="post">
  //     <img src={user.picture} class="ProfilePic" />
  //     <p>{post}</p>
  //   </li>;
  // }

  // console.log(post);
  return (
    <div class="Profile">
      <div className="App">
        <header className="App-header">
          <h2 id="logo">
            Face<span>tagram</span>
          </h2>
          <ul>
            <li>
              <Link to="/">
                <i class="fas fa-home" id="home"></i>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <img src={user.picture} class="ProfilePic" />
              </Link>
            </li>
          </ul>
        </header>
        <hr />
      </div>
      <div id="ProfileTop">
        <div id="ProfileTopLeft">
          <h3>{user.login}</h3>
          <img src={user.picture} class="ProfilePic" alt="profile" />
        </div>
        <div id="ProfileTopRight">
          <textarea id="bio" rows="6" cols="35" name="comment">
            {user.bio}
          </textarea>
        </div>
      </div>

      <hr />

      <div id="ProfilePosts">
        <ul id="posts">
          <p>Heres your first ever post!</p>
          <li class="post">
            <img src={user.picture} class="ProfilePic" />
            <p>{posts[0]}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
