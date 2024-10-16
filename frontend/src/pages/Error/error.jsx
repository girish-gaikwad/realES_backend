export const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-9xl font-bold text-red-600 animate-pulse">404</h1>
        <h2 className="text-4xl font-bold text-gray-800 mt-4">Oops! Page not found</h2>
        <p className="text-xl text-gray-500 mt-2">
          The page you are looking for doesn’t exist or an error occurred.
        </p>
        <p className="text-lg text-gray-500 mb-6">
          Go back to the homepage or try refreshing the page.
        </p>
        <a
          href="/"
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};
