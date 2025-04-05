import React from "react";
import MainLayout from "../layout/MainLayout";
import { Route, Switch } from "react-router-dom";
const AppRoutes: React.FC = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={() => <div>Home</div>} />
      </Switch>
    </MainLayout>
  );
};

export default AppRoutes;
