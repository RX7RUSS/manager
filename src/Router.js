import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StaffList from './components/StaffList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 85 }} >
      <Scene key="root" >
        <Scene key="login" component ={LoginForm} title="Please Login" />
        <Scene key="employeelist" component={StaffList} title="Employees" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
