import React from "react";

const Modal = ({ setModal }) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-5 w-full p-4 md:h-full bg-black/70"
        onClick={() => setModal(false)}
      ></div>
      <div className="fixed top-[15%] w-full p-16 z-10">
        <div className="relative w-full max-w-2xl m-auto">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-start justify-between p-4 pl-6 border-b rounded-t border-gray-300">
              <h3 className="text-xl font-semibold text-green-700">
                Congratulations!
              </h3>
              <button
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-[#5651e5] dark:hover:text-white"
                onClick={() => setModal(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-700">
                You have successfully booked your room. This room will not be
                available for other guests on your booking dates. You could
                manage your bookings on your profile page.
              </p>
            </div>

            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b border-gray-300">
              <button
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-[#5651e5] dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-[#5954da] dark:focus:ring-gray-600"
                onClick={() => setModal(false)}
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
