import React from "react";
// import { Route, Switch } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePageOne from "./Components/Homepage1/HomePageOne.js";
import Menu from "./Menu.js";
import Homepage2 from "./Homepage2.js";
import Homepage1 from "./Homepage1.js";
import Error from "./Error.js";
const App = () => {
  return (
    <>
      {/* <HomePageOne />
      <Menu />
      <Switch>
        <Route exact path="/" component={Homepage1} />
      </Switch> */}
      <Routes>
        <Route index element={<Homepage1 />} />
        <Route path="about" element={<Homepage2 />} />
        <Route path="*" element={<Error />} />

        {/* <Route path="dashboard" element={<Dashboard />} /> */}

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
      </Routes>

      {/* <Homepage2 /> */}
    </>
  );
};

export default App;

// export { Route, Switch };
