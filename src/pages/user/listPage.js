/* eslint-disable jsx-a11y/img-redundant-alt */
import { useParams } from "react-router-dom";
import WaitListFormList from "../../components/dashboard/FormList";
import StatsCard from "../../components/elements/StatsCard";
import DashboardContainer from "../../layouts/DashboardContainer";
import { Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
const WaitlistPage = () => {
  const { waitlistID } = useParams();
  const [loading, setLoading] = useState(false);
  const [waitlist] = useState({});
  const [data, setData] = useState([]);
  const toast = useToast();
  const getData = async () => {};
  useEffect(() => {
    getData();
  }, []);
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  return (
    <DashboardContainer>
      <h1 className="font-bold">
        {loading ? <Spinner /> : waitlist?.waitlistTitle}
      </h1>
      <h5 className="font-normal">Waitlist/Form ID - {waitlistID}</h5>
      <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
        <StatsCard
          title="Forms"
          count={loading ? <Spinner /> : data.length}
          description="Total Forms submitted"
        />
      </div>
      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 mt-4">
        <div className="flow-root">
          <div className="w-full flex justify-between">
            <h3 className="text-xl font-semibold dark:text-white">
              Form Submissions
            </h3>
            <div>
              <button
                onClick={getData}
                className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Refresh
              </button>
              <button
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={exportData}
              >
                Export FORM JSON
              </button>
            </div>
          </div>
          <WaitListFormList isData={true} list={data} />
        </div>
      </div>
    </DashboardContainer>
  );
};
export default WaitlistPage;
