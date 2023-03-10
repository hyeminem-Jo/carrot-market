import React from 'react';
import { NextPage } from 'next';
import Layout from "@/components/layout";
import Button from "@/components/button";
import TextArea from "@/components/textarea";

const Write: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className="px-4 py-10">
        <TextArea required placeholder="Ask a question!" />
        <Button text="Submit"/>
      </form>
    </Layout>
  );
};

export default Write;
