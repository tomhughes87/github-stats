import React, { useState, useEffect } from "react";
import "./App.css";
import Displayer from "./components/Diplayer";
import StatCard from "./components/StartCard/StatCard";
import TheDropRevealer from "./components/TheDropRevealer";
import ShrinkRightRevealer from "./components/ShrinkRightRevealer";
import TheClickerRevealer from "./components/TheClickerRevealer";
import LogoWithFadeText from "./components/LogoWithFadeText";
import TheChainsawRevealer from "./components/ChainsawRevealer";
import ShrinkRevealer from "./components/ShrinkRevealer";
import SearchBarExpanding from "./components/SearchBarExpanding";
import CallGitHubAPI from "./components/CallGitHubAPI";
import NotificationBarParent from "./components/NotificationBarParent";
import { isConstructorDeclaration } from "typescript";
import { click } from "@testing-library/user-event/dist/click";

function App() {
  console.log("reloaded ");
  let [apiCounter, setApiCounter] = useState(0);
  let [myusername, setMyusername] = useState({
    name: "",
    login: "",
    followers: 0,
    following: 0,
    id: "",
    public_repos: "",
    email: "",
    location: "",
    public_gists: "",
  });
  let [searchWord, setSearchWord] = useState("tomhughes87");
  let [userSearchMessage, setUserSearchMessage] = useState(
    "Search of a user's GitHub user name"
  );

  useEffect(() => {
    fetch(`https://api.github.com/users/${searchWord}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })

      .then((actualData) => {
        setMyusername(actualData);
        console.log("api data:", actualData);
        setUserSearchMessage(`Showing ${searchWord}'s stats`);
      })
      .catch((err) => {
        console.log(err.message);
        // setSearchWord(`We can't find ${searchWord}`);
        setUserSearchMessage(`${searchWord} not found`);
      });
  }, [searchWord]);

  return (
    <>
      <NotificationBarParent />

      <div className="App">
        <header className="App-header">
          <LogoWithFadeText />

          <SearchBarExpanding setSearchWord={setSearchWord} />
          <p>{userSearchMessage}</p>

          <br></br>
          <br></br>
          <div id="align-test">
            <TheDropRevealer data={["public repos", myusername.public_repos]} />
            <Displayer data={["followers", myusername.followers]} />
            <ShrinkRightRevealer data={["Username", myusername.login]} />
            <TheClickerRevealer data={["email", myusername.email]} />
            <TheChainsawRevealer data={["id", myusername.id]} />
            {/* <StatCard /> */}
            <ShrinkRevealer data={["public gists", myusername.public_gists]} />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
// email - followers-// following-// id-// location-// // organizations_url-// public_gists-// public_repos
