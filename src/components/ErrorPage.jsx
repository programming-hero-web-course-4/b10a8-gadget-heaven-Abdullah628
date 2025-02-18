import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mt-2">Oops! Page not found.</p>
      {/* <img 
        src="https://illustrations.popsy.co/gray/error.svg" 
        alt="Not Found"
        className="w-64 mt-4"
      /> */}
      <Link
        to="/"
        className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}

export default ErrorPage;
