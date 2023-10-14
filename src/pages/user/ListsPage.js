/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import CarList from "../../components/dashboard/FormList";
import DashboardContainer from "../../layouts/DashboardContainer";
import { Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getUserCars } from "../../services/api";

/* eslint-disable jsx-a11y/anchor-is-valid */
const WaitlistsPage = () => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [cars, setCars] = useState([]); // Added state for cars
  const getData = async () => {
    setLoading(true);
    const api = await getUserCars();
    setLoading(false);
    if (!api.success) {
      return toast({
        title: api.message,
        status: "error",
        isClosable: true,
      });
    }
    setCars(api.data); // Update the cars state with the number of cars
  };
  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DashboardContainer>
      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 mt-4">
        <div className="flow-root">
          <div className="w-full flex justify-between">
            <h3 className="text-xl font-semibold dark:text-white">
              Cars List
            </h3>
            <Link
              to="/app/car"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add a new car
            </Link>
          </div>
          {loading && (
            <div className="w-full flex justify-center">
              <Spinner />
            </div>
          )}
          <CarList list={cars} />
        </div>
      </div>
    </DashboardContainer>
  );
};
export default WaitlistsPage;
