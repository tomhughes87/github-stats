import React from "react";

interface propTypes {
  shown: boolean;
  close: any;
}

export default function NotificationBar({ shown, close }: propTypes) {
  return shown ? (
    <>
        <div id="NotificationBarContainer">
          <p id="NotificationBarText">
            Enter a GitHub username and checkout their stats!
          </p>
        </div>
        <div id="NotificationBarCloseBtn" onClick={close}>
          <p>x</p>
        </div>
    </>
  ) : null;
}
