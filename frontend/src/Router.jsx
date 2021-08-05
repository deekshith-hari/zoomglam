import React from "react";
import { Route, Switch } from "react-router";
import Home from "./containers/Home";
import SearchList from "./containers/SearchList";
import Preview from "./containers/Preview";
import Favourites from "./containers/Favourites";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/search"} component={SearchList} />
        <Route exact path={"/preview"} component={Preview} />
        <Route exact path={"/favourites"} component={Favourites} />
      </Switch>
    </>
  );
};
export default Router;
