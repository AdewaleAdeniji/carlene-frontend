import { Link } from "react-router-dom";

const LinkItem = ({ title, path, icon, currentPath }) => {
  const active = currentPath === path;
  return (
    <Link
      to={path}
      className={`flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700 ${
        active && "bg-gray-100"
      }`}
    >
      {icon}
      <span className="ml-3" sidebar-toggle-item>
        {title}
      </span>
    </Link>
  );
};

export default LinkItem;
