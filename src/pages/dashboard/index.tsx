import React, { useContext } from "react";
import { AuthContext } from "@/contexts/authentication/authContext";
import DashboardContainer from "@/containers/dashboardContainer";

const Dashboard = () => {
  const { isLoggedIn } = useContext(AuthContext)
  
  return (
    isLoggedIn ? <DashboardContainer /> : <div>Acesso não autorizado</div>
  )
}

export default Dashboard;
