import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function DefaultLayout({ children }) {
  return (
    <div className="">
      <div className="mb-[44px]">
        <Header />
      </div>
      <div className="flex">
        <Sidebar />
        <div className="flex-1  h-screen">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
