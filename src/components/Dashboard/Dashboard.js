import React from 'react'
import ButtonAppBar from '../ButtonAppBar';
import BottomNavigator from '../BottomNavigator';

const Dashboard = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  if(isAuthenticated === "false") {
    window.location.href = '/';
  } else {
    return (
      <>
        <ButtonAppBar />
        <h1>This will be the dashboard</h1>
        <BottomNavigator />
      </>
    )
  }
}

export default Dashboard;