import React from 'react';
import { NextPage } from 'next';
import Button from "@/components/button";
import Input from "@/components/input";
import TextArea from "@/components/textarea";

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
      <TextArea name="description" label="Description" />
      <Button text="Go Live" />
    </div>
  );
};

export default Create;
