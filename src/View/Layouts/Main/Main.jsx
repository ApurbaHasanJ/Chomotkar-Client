import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";

const Main = () => {
  return (
    <main >
      <div className="">
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Main;
