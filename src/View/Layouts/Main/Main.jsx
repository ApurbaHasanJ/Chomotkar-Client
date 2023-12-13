import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <main className="h-screen">
        <Outlet/>
      </main>
    </>
  );
};

export default Main;
