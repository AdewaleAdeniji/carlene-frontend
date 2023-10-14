import { Link } from "react-router-dom";
import { getTimeUntilDate } from "../../helpers/date";
import {
  convertCaseToReadAble,
  formatIntegerToCurrency,
} from "../../helpers/utils";

const SingleMaintenance = ({ maintenance }) => {
  const due = getTimeUntilDate(maintenance?.dateDue);
  return (
    <li className="py-4">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <svg
            className="w-6 h-6 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
            {convertCaseToReadAble(maintenance?.title)}
          </p>
          {!maintenance?.detail && (
            <p className="text-xs font-normal text-gray-500  dark:text-gray-400">
              Cost:{" "}
              {formatIntegerToCurrency(
                maintenance?.metaData?.amount,
                maintenance?.currency
              )}
            </p>
          )}
          <p className="text-xs font-normal text-gray-500  dark:text-gray-400">
            {due.inFuture ? "Due in " + due.text : "Overdue - " + due.text}
          </p>
          <p className="text-xs font-normal text-blue-900  dark:text-gray-400">
            Date Done - {maintenance?.dateDone}
          </p>
          {
            maintenance?.detail && (
                Object.values(maintenance?.metaData).map((value, index) => {
                    if(value === "") return null;
                    return (
                        <p className="text-xs font-normal text-gray-500  dark:text-gray-400" key={index}>
                            {Object.keys(maintenance?.metaData)[index]}: {value}
                        </p>
                    )
                })
            )
          }
        </div>
        <div className="inline-flex items-center">
          {maintenance?.detail ? (
            <div className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              {formatIntegerToCurrency(
                maintenance?.metaData?.amount,
                maintenance?.currency
              )}
            </div>
          ) : (
            <Link
              to={`/app/car/${maintenance.carID}/${maintenance.maintenanceId}`}
              className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              View
            </Link>
          )}
        </div>
      </div>
    </li>
  );
};
export default SingleMaintenance;
