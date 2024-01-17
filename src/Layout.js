import { Outlet } from "react-router-dom";
import BasicExample from "./Navigation";

const Layout = () => {
  return (
    <>
      <header>
        <BasicExample />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};
export default Layout;
