import React from 'react';
import { NextPage } from 'next';
import Button from "@/components/button";
import Input from "@/components/input";

const Create: NextPage = () => {
  return (
    <div className="px-4 space-y-5 py-10">
      <Input required label="Name" name="name" type="text" />
      <Input
        required
        label="Price"
        placeholder="0.00"
        name="price"
        type="text"
        kind="price"
      />
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
