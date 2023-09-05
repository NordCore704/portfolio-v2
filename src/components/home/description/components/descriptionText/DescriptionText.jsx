import React from "react";
import { TextOne, TextTwo } from "@/exports";

const DescriptionText = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center p-5 gap-3 w-full  h-[50%]">
      <TextOne />
      <TextTwo />
    </div>
  );
};

export default DescriptionText;
