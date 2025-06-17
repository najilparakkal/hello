"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import AnotherComponent from "./AnotherComponent";

const Page = ({ params }) => {
  const data = React.use(params).productId;
  console.log(data);
  return (
    <div>
      <h1>Hello {data}</h1>
      <AnotherComponent/>
    </div>
  );
};

export default Page;
