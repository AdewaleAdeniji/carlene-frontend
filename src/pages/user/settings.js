/* eslint-disable jsx-a11y/img-redundant-alt */
import DashboardContainer from "../../layouts/DashboardContainer";
import { getAPIKeys, getUser } from "../../services/api";
import { Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

/* eslint-disable jsx-a11y/anchor-is-valid */
const SettingsPage = () => {
  const user = getUser();
  const [loading, setLoading] = useState(false);
  const [keys, setKeys] = useState({});
  const toast = useToast();
  const getData = async () => {
    setLoading(true);
    const api = await getAPIKeys();
    setLoading(false);
    if (!api.success) {
      return toast({
        title: api.message,
        status: "error",
        isClosable: true,
      });
    }
    setKeys(api)
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DashboardContainer>
      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold dark:text-white">
          Profile / Settings
        </h3>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              for="form-title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <div
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Form Title...."
              required={true}
            >
              {user?.firstName} {user?.lastName}
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              for="form-title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <div
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Form Title...."
              required={true}
            >
              {user?.email}
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              for="form-title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Private Key
            </label>
            <div
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Form Title...."
              required={true}
            >
              { loading ? <Spinner /> : keys?.privateKey}
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              for="form-title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Public Key
            </label>
            <div
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Form Title...."
              required={true}
            >
              { loading ? <Spinner /> : keys?.publicKey}
            </div>
          
          </div>
          
        </div>
      </div>
    </DashboardContainer>
  );
};
export default SettingsPage;
