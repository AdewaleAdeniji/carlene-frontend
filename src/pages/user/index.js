/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";
import FormList from "../../components/dashboard/FormList";
import StatsCard from "../../components/elements/StatsCard";
import DashboardContainer from "../../layouts/DashboardContainer";
import { Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getUserCars } from "../../services/api";

/* eslint-disable jsx-a11y/anchor-is-valid */
const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [cars, setCars] = useState([]); // Added state for cars
  const toast = useToast();
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
      <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
        <StatsCard
          isLoading={loading}
          title="Cars"
          count={cars.length} // Display the number of cars
          description="Total number of cars"
        />
      </div>

      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 mt-4">
        <div className="flow-root">
          <div className="w-full flex justify-between">
            <h3 className="text-xl font-semibold dark:text-white">
              Cars List
            </h3>
            <Link
              to="/app/car"
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              disabled={loading}
            >
              Add a new car
            </Link>
          </div>
          {loading && <Spinner />}
          <FormList list={cars} />
          <div className="w-full flex justify-end">
            {cars.length > 10 && (
              <Link
                to="/app/cars"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                View All Cars
              </Link>
            )}
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};
export default Dashboard;
