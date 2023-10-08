/* eslint-disable jsx-a11y/img-redundant-alt */
import DashboardContainer from "../../layouts/DashboardContainer";
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Spinner,  } from "@chakra-ui/react";
import { useState } from "react";

const SampleFormPage = () => {
  const [formTitle, setFormTitle] = useState("");
  const [loading] = useState(false);
  const handleCreateForm = async () => {};
  return (
    <DashboardContainer>
      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold dark:text-white">
          Create form
        </h3>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              for="form-title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Form Title
            </label>
            <input
              type="text"
              name="form-title"
              id="form-title"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Form Title...."
              required={true}
            />
            <label
              for="form-title"
              className="block mb-2 text-xs font-light mt-2 text-gray-900 dark:text-white"
            >
              This could be the name of your small product or startup
            </label>
            <label
              for="form-title"
              className="block mb-2 text-xs font-light mt-2 text-gray-900 dark:text-white"
            >
              Must be more than 3 characters
            </label>
          </div>
        </div>
        <div className="col-span-6 sm:col-full">
          <button
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="submit"
            onClick={handleCreateForm}
            disabled={formTitle.length < 3 || loading}
          >
            {loading ? <Spinner /> : "Create"}
          </button>
        </div>
      </div>
    </DashboardContainer>
  );
};
export default SampleFormPage;
