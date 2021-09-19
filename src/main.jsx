import AV from "leancloud-storage";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.css";

// https://console.leancloud.cn/apps/73rQc9RCXmXDgXg2fD2pPrkS-gzGzoHsz/settings/keys
AV.init({
  appId: "73rQc9RCXmXDgXg2fD2pPrkS-gzGzoHsz",
  appKey: "FT6wlcV9U6XUNHRinau5pXa8",
  serverURL: "https://73rqc9rc.lc-cn-n1-shared.com",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
