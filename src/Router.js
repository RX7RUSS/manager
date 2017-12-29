import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeList from './components/EmployeeList';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }} >
      // <Scene key="root" >
        <Scene key="employeelist" component={ EmployeeList } title="Employees" />
        <Scene key="login" component ={LoginForm} title="Please Login" />
      // </Scene>
    </Router>
  );
};

export default RouterComponent;
