import FormItem from "./FormItem";

const FormList = ({ list }) => {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {list.map((item, index) => {
        return (
          <FormItem
            title={item?.carModel + ' ' + item?.carMake + ' ' + item?.carYear}
            details={item?.carColor + ' ' + item?.carType}
            itemID={item?.carID}
            key={index}
          />
        );
      })}
    </ul>
  );
};
export default FormList;
