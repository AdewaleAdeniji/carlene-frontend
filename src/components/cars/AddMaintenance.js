import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
  Textarea,
  Spinner,
} from "@chakra-ui/react";
import moment from "moment";
import { addMaintenance } from "../../services/api";

const AddMaintenance = ({ isOpen, onClose, maintenanceTypes, carID }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    dateDone: moment().format("YYYY-MM-DD"),
    dateDue: "",
    maintenanceType: "",
    amount: "",
    litre: "",
    tyreChanged: "",
    notes: "",
  });
  const toast = useToast();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const types = Object.keys(maintenanceTypes);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here

    // validate if the any of the fields are empty except litre
    if (
      !formData.dateDone ||
      !formData.dateDue ||
      !formData.maintenanceType ||
      !formData.amount
    ) {
      return toast({
        title: "Please fill all form fields",
        status: "error",
        isClosable: true,
      });
    }
    const payload = {
      dateDone: moment(formData.dateDone).format("DD-MM-YYYY"),
      dateDue: moment(formData.dateDue).format("DD-MM-YYYY"),
      metaData: {
        amount: formData.amount,
        litre: formData.litre,
        typeChanged: formData.tyreChanged,
        notes: formData.notes,
      },
      carID: carID,
      maintenanceType: formData.maintenanceType,
    };
    setLoading(true);
    const api = await addMaintenance(payload);
    setLoading(false);
    if (!api.success) {
      return toast({
        title: api.message,
        status: "error",
        isClosable: true,
      });
    }
    toast({
        title: "Maintenance added successfully",
        status: "success",
        isClosable: true,
    });
    onClose(true); // Close the modal after submission
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Maintenance</ModalHeader>
        {!loading && <ModalCloseButton />}
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel htmlFor="maintenanceType">
              Type of Maintenance *
            </FormLabel>
            <Select
              type="text"
              id="maintenanceType"
              name="maintenanceType"
              value={formData.maintenanceType}
              onChange={handleChange}
              isRequired
            >
              <option></option>
              {types.map((type) => {
                return (
                  <option value={type} key={type}>
                    {maintenanceTypes[type]}
                  </option>
                );
              })}
              )
            </Select>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="name">Maintenance Cost *</FormLabel>
            <Input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              isRequired
            />
          </FormControl>
          {formData.maintenanceType === "800" && (
            <FormControl mb={4}>
              <FormLabel htmlFor="name">Price per liter</FormLabel>
              <Input
                type="number"
                id="litre"
                name="litre"
                value={formData.litre}
                onChange={handleChange}
              />
            </FormControl>
          )}
          {formData.maintenanceType === "100" && (
            <FormControl mb={4}>
              <FormLabel htmlFor="tyreChanged">
                Which of the tyres did you change?
              </FormLabel>
              <Select
                type="text"
                id="tyreChanged"
                name="tyreChanged"
                value={formData.tyreChanged}
                onChange={handleChange}
                isRequired
              >
                <option></option>
                <option value="frontLeft">Front Left</option>
                <option value="frontRight">Front Right</option>
                <option value="backLeft">Back Left</option>
                <option value="backRight">Back Right</option>
              </Select>
            </FormControl>
          )}
          <FormControl mb={4}>
            <FormLabel htmlFor="name">Date Done *</FormLabel>
            <Input
              type="date"
              id="dateDone"
              name="dateDone"
              value={formData.dateDone}
              onChange={handleChange}
              isRequired
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="name">Date Due *</FormLabel>
            <Input
              type="date"
              id="dateDue"
              name="dateDue"
              value={formData.dateDue}
              onChange={handleChange}
              isRequired
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="notes">Any notes</FormLabel>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-3"
          >
            {loading ? <Spinner /> : "Add Maintenance"}
          </button>
          <Button onClick={onClose} isDisabled={loading}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddMaintenance;
