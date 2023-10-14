/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link, useParams } from "react-router-dom";
import StatsCard from "../../components/elements/StatsCard";
import DashboardContainer from "../../layouts/DashboardContainer";
import { Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getCarMaintenanceDetails } from "../../services/api";
import SingleMaintenance from "../../components/dashboard/MaintenanceItem";
import { formatIntegerToCurrency } from "../../helpers/utils";
import AddMaintenance from "../../components/cars/AddMaintenance";
import { ArrowBackIcon } from "@chakra-ui/icons";
/* eslint-disable jsx-a11y/anchor-is-valid */
const MaintenancePage = () => {
  const { carID, maintenanceId } = useParams();
  const [loading, setLoading] = useState(false);
  const [car, setCatDetails] = useState({});
  const [data, setData] = useState([]);
  const [maintenanceTypes, setMaintenanceTypes] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [currency, setCurrency] = useState("NGN");
  const [openModal, setOpenModal] = useState(false);
  const toast = useToast();

  const calculateMaintenancePrices = (priceData) => {
    var total = 0;
    priceData.forEach((item) => {
      total += parseInt(item?.metaData?.amount || 0);
    });
    setTotalAmount(formatIntegerToCurrency(total, currency));
  };
  const getData = async () => {
    setLoading(true);
    setTotalAmount(0);
    const api = await getCarMaintenanceDetails(carID, maintenanceId);
    setLoading(false);
    if (!api.success) {
      return toast({
        title: api.message,
        status: "error",
        isClosable: true,
      });
    }
    setCatDetails(api.data?.car);
    setData(api.data?.maintenances);
    setMaintenanceTypes(api.data?.types);
    setCurrency(api.data?.currency || currency);
    calculateMaintenancePrices(api.data?.maintenances);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <DashboardContainer>
      <Link
        to={`/app/car/${carID}`}
        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mb-4"
      >
        <ArrowBackIcon /> Back
      </Link>
      <h1 className="font-bold mt-2">
        {loading ? <Spinner /> : car?.carModel + " " + car?.carMake}
      </h1>
      <h5 className="font-normal">
        {loading ? <Spinner /> : maintenanceTypes[maintenanceId]}
      </h5>
      <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
        <StatsCard
          title="Amount Spent"
          count={loading ? <Spinner /> : totalAmount}
          description={`Amount Spent on ${maintenanceTypes[maintenanceId]}`}
        />
        <StatsCard
          title="Maintenance Count"
          count={loading ? <Spinner /> : data.length}
          description="Total times car has been maintained"
        />
      </div>
      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 mt-4">
        <div className="flow-root">
          <div className="w-full sm:flex justify-between">
            <h3 className="text-xl font-semibold dark:text-white">
              Maintenances
            </h3>
            <div className="mt-2 sm:mt-0 flex sm:block flex-col">
              {/* <Link
                className="px-3 py-2 mb-3 sm:mr-3 mr-0 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                to={`/app/car/${carID}/maintenance`}
              >
                View Maintenance Details
              </Link> */}
              {/* <button
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={() => setOpenModal(true)}
              >
                Add Maintenance
              </button> */}
            </div>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {data.map((maintenance) => {
                return (
                  <SingleMaintenance
                    key={maintenance.id}
                    maintenance={{
                      title: maintenanceTypes[maintenance.maintenanceId],
                      currency,
                      detail: true,
                      ...maintenance,
                    }}
                  />
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <AddMaintenance
        onClose={(reload) => {
          if (reload) getData();
          setOpenModal(!openModal);
        }}
        isOpen={openModal}
        maintenanceTypes={maintenanceTypes}
        carID={carID}
      />
    </DashboardContainer>
  );
};
export default MaintenancePage;
