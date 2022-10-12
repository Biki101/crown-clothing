import { Outlet } from "react-router-dom";
import Directories from "../../component/directories/directories.component";

const Home = () => {
  return (
    <div>
      <Directories />;
      <Outlet />
    </div>
  );
};

export default Home;
