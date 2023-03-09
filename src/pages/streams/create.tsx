import React from 'react';
import { NextPage } from 'next';
import Button from "@/components/button";

const Create: NextPage = () => {
  return (
    <div className="px-4 space-y-5 py-10">
      <div className="">
        <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="name">
          Name
        </label>
        <div className="rounded-md relative flex  items-center shadow-sm">
          <input
            id="name"
            type="email"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>
      </div>
      <div className="">
        <label htmlFor="price" className="text-sm text-gray-700 font-medium">
          Price
        </label>
        <div className="rounded-md relative flex items-center shadow-sm">
          <div className="absolute left-0 pl-3 flex items-center justify-center">
            <span className="text-gray-500 pointer-events-none text-sm">$</span>
          </div>
          <input
            id="price"
            className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="text-sm text-gray-700 font-medium">Description</label>
        <textarea
          className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
          rows={4}
        />
      </div>
      <Button text="Go Live" />
    </div>
  );
};

export default Create;
