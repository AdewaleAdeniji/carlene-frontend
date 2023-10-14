/* eslint-disable jsx-a11y/img-redundant-alt */
import DashboardContainer from "../../layouts/DashboardContainer";
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Spinner, useToast } from "@chakra-ui/react";
import { useState } from "react";
import cars from "../../helpers/cars";
import YearDropdown from "../../components/elements/YearDropdown";
import { addCar } from "../../services/api";
import { useNavigate } from "react-router-dom";

const CreateCar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [formData, setFormData] = useState({
    carYear: "",
    carMake: "",
    carModel: "",
    carColor: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCreateForm = async () => {
    // Handle form submission here
    console.log(formData);
    // check through the object to see if any of the values are empty
    for (const key in formData) {
      if (formData[key] === "") {
        return toast({
          title: "Please fill all form fields",
          status: "error",
          isClosable: true,
        });
      }
    }
    setLoading(true);
    const api = await addCar(formData);
    setLoading(false);
    if (!api.success) {
      return toast({
        title: api.message,
        status: "error",
        isClosable: true,
      });
    }
    toast({
        title: "Car added successfully",
        status: "success",
        isClosable: true,
    });
    navigate('/app/cars')
  };
  return (
    <DashboardContainer>
      <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold dark:text-white">
          Add a new car
        </h3>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="form-title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Car Brand
            </label>
            <select
              type="text"
              name="carMake"
              id="form-title"
              value={formData?.carMake}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Form Title...."
              required={true}
            >
                <option value="">Car Brand</option>
              {cars.map((car) => {
                return <option value={car.brand} key={car.brand}>{car.brand}</option>;
              })}
            </select>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="form-title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Car Model
            </label>
            <select
              type="text"
              name="carModel"
              id="form-title"
              value={formData?.carModel}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Form Title...."
              required={true}
            >
              <option value="">Car Model</option>
              {formData?.carMake !== "" && cars
                .filter((car) => car.brand === formData?.carMake)[0]
                ?.models.map((model) => {
                  return <option value={model} key={model}>{model}</option>;
                })}
            </select>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="form-title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Car Year
            </label>
            <YearDropdown
              value={formData?.carYear}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Form Title...."
              required={true}
              name="carYear"
            />
            
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="form-title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Car Color
            </label>
            <input
              value={formData?.carColor}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Car color"
              required={true}
              name="carColor"
            />
            
          </div>
        </div>
        <div className="col-span-6 sm:col-full mt-4">
          <button
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            type="submit"
            onClick={handleCreateForm}
            disabled={loading}
          >
            {loading ? <Spinner /> : "Add Car"}
          </button>
        </div>
      </div>
    </DashboardContainer>
  );
};
export default CreateCar;
