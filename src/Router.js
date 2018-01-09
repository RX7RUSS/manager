import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StaffList from './components/StaffList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" >
        <Scene key="auth" >
          <Scene key="login" component ={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main" >
          <Scene key="stafflist" component={StaffList} title="Employees" />
        </Scene>
        <Scene key="map" >
          <Scene key="MapView" component={StaffList} title="MapView" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
