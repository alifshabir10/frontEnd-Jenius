import axios from "axios";
import React from "react";

export default function ModalDelete(props) {

  async function deleteCart() {
    return await axios({
      url: props.url,
      method: "delete",
    })
      .then(props.update)
      .catch((err) => console.error(err));
  }

  return (
    <div className="fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto-auto pt-40">
      <div className="bg-white rounded-lg w-full sm:w-2/3 lg:w-1/3 mx-auto">
        <div className="w-98 border-t-8 border-item rounded-lg flex">
          <div className="w-1/3 pt-6 flex justify-center">
            <img
              src={props.image}
              alt="product"
              className="w-24 h-24 text-white p-3 rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              height="24"
              width="24"
            />
          </div>
          <div className="w-full pt-9 pr-4">
            <h3 className="font-bold text-pink-700">Delete {props.name}?</h3>
            <p className="py-4 text-sm text-gray-400">
              Are you sure you want to delete {props.name} in Cart?
            </p>
          </div>
        </div>

        <div className="p-4 flex space-x-4">
          <button
            className="w-1/2 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm"
            onClick={props.close}
          >
            Cancel
          </button>
          <button
            className="w-1/2 px-4 py-3 text-center text-pink-100 bg-item rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm"
            onClick={deleteCart}
          >
            Delete Product
          </button>
        </div>
      </div>
    </div>
  );
}
