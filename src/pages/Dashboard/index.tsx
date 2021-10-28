import { useAuth } from "../../Providers/Auth";

const Dashboard = () => {
  const { Logout } = useAuth();
  return (
    <div>
      <p>Dashboard</p>
      <button onClick={Logout}>Sair</button>
    </div>
  );
};

export default Dashboard;
