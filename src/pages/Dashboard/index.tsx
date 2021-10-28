import { useAuth } from "../../Providers/Auth";
import "./style.css";
const Dashboard = () => {
  const { Logout } = useAuth();
  return (
    <div className = 'DashBoardBox'>
      <h3>Dashboard</h3>
      <button onClick={Logout}>Sair</button>
    </div>
  );
};

export default Dashboard;
