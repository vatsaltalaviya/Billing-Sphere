import React from "react";
import PopUp from "../components/PopUp";

const ReminderReceivable = ({ onClose }) => {
  return (
    <PopUp onClose={onClose}>
      <div className=" border bg-white flex flex-col">
        <div className="border-b flex justify-center bg-blue-600">
          <h1 className="font-medium text-xl text-white">Set Quick Reminder</h1>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col p-2 space-y-3">
            <div className="flex gap-2">
              <span className="w-32">Reminder Days</span>
              <input
                type="text"
                name=""
                id=""
                className="border px-2 py-1 flex-1"
              />
            </div>
            <div className="flex gap-2">
              <span className="w-32">Reminder Title</span>
              <input
                type="text"
                name=""
                id=""
                className="border px-2 py-1 flex-1"
              />
            </div>
            <div className="flex gap-2">
              <span className="w-32">Reminder Description</span>
              <textarea
              rows='5'
                type="text"
                name=""
                id=""
                className="border px-2 py-1 flex-1 resize-none"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2 xl:ml-5 items-center ">
              <button className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500">
                Save
              </button>
              <button
                onClick={onClose}
                className=" px-5 h-10 font-medium bg-amber-300 border border-amber-600 hover:bg-amber-500"
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </PopUp>
  );
};

export default ReminderReceivable;
