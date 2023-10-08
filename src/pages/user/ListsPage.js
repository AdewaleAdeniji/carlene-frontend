/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import WaitListFormList from "../../components/dashboard/FormList";
import DashboardContainer from "../../layouts/DashboardContainer";
import { Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getWaitlistForms } from "../../services/api";

/* eslint-disable jsx-a11y/anchor-is-valid */
const WaitlistsPage = () => {
  const [loading, setLoading] = useState(false);
  const [forms, setForms] = useState([]);
  const toast = useToast();
  const getData = async () => {
    // setLoading(true);
    // const api = await getWaitlistForms();
    // setLoading(false);
    // if (!api.success) {
    //   return toast({
    //     title: api.message,
    //     status: "error",
    //     isClosable: true,
    //   });
    // }
    // setForms(api.waitlists);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DashboardContainer>
      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 mt-4">
        <div className="flow-root">
          <div className="w-full flex justify-between">
            <h3 className="text-xl font-semibold dark:text-white">
              Waitlists Form
            </h3>
            <Link
              to="/app/waitlist"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create Waitlist
            </Link>
          </div>
          {loading && (
            <div className="w-full flex justify-center">
              <Spinner />
            </div>
          )}
          <WaitListFormList list={forms} />
        </div>
      </div>
    </DashboardContainer>
  );
};
export default WaitlistsPage;
