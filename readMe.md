`npm init`

`npm i --save-dev webpack webpack-cli webpack-dev-server babel-loader @babel/preset-env @babel/core @babel/plugin-transform-runtime @babel/preset-react @babel/eslint-parser @babel/runtime @babel/cli eslint eslint-config-airbnb-base eslint-plugin-jest eslint-config-prettier path`

`npm i react react-dom`

`npm run build`

`npm run start`

# Reference

https://webpack.js.org/configuration/

//------- public/index.html

<!--
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="main.js"></script>
  </body>
</html>
-->

//------- src/index.js

<!--
import React from "react";
import reactDom from "react-dom";
import App from "./App";

reactDom.render(<App />, document.getElementById("root"));
-->

//------- src/App.js

<!--
import React from "react";

const App = () => {
  return (
    <>
      <h1>Welcome to React</h1>
      <p>This is the best way to go</p>
    </>
  );
};

export default App;
-->
