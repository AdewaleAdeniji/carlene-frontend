import FormItem from "./FormItem";

const FormList = ({ isData, list }) => {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {list.map((item, index) => {
        return (
          <FormItem
            title={"Hey"}
            count={"50"}
            dateCreated={"shdjdjd"}
            waitlistID={"hdjdjd"}
            isData={false}
            dataJSON={"jdjd"}
            key={index}
          />
        );
      })}
    </ul>
  );
};
export default FormList;
