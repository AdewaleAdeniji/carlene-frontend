/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import FormList from "../../components/dashboard/FormList";
import StatsCard from "../../components/elements/StatsCard";
import DashboardContainer from "../../layouts/DashboardContainer";
import { Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [forms, setForms] = useState([1,2]);
  const [hits, setHits] = useState(0);
  const toast = useToast();
  const getData = async () => {
  
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DashboardContainer>
      <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
        <StatsCard
          title="Item"
          count={0}
          description="Total Item count"
        />
        <StatsCard
          title="API hits"
          count={0}
          description="Total API hits using your API Keys"
        />
      </div>

      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 mt-4">
        <div className="flow-root">
          <div className="w-full flex justify-between">
            <h3 className="text-xl font-semibold dark:text-white">
              List
            </h3>
            <Link
              to="/app/waitlist"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              disabled={loading}
            >
              Create Button
            </Link>
          </div>
          {loading && <Spinner />}
          <FormList list={forms} />
          <div className="w-full flex justify-end">
            {forms.length > 10 && (
              <Link
                to="/app/waitlists"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                View All
              </Link>
            )}
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};
export default Dashboard;
