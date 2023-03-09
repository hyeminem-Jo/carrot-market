import React from 'react';
import { NextPage } from 'next';
import Layout from "@/components/layout";
import Button from "@/components/button";

const Write: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className="px-4 py-10">
      <textarea
        className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 "
        rows={4}
        placeholder="Answer this question!"
      />
        <Button text="Submit"/>
      </form>
    </Layout>
  );
};

export default Write;
