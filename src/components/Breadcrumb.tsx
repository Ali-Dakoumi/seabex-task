import { Link } from "react-router-dom";

function Breadcrumb() {
  return (
    <div className="w-full mt-4 mb-16 bg-bgColor flex p-4 justify-center items-center">
      <ul className="flex gap-4">
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>/</li>
        <li>Hot Deal</li>
      </ul>
    </div>
  );
}

export default Breadcrumb;
