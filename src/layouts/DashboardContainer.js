import { useState } from "react";
import DashboardNav from "../components/layouts/DashboardNav";
import Sidebar from "../components/layouts/SideBar";
import { getTokenFromLocal } from "../services/api";

const DashboardContainer = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  getTokenFromLocal();
  return (
    <>
      <DashboardNav setOpenMenu={()=> setOpenMenu(!openMenu)} />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar openMenu={openMenu} />
        <div
        id="main-content"
        class="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900 py-5"
      >
        <main>
            <div class="px-4 pt-6">
        {children}
        </div>
        </main>
        </div>
      </div>
    </>
  );
};

export default DashboardContainer;