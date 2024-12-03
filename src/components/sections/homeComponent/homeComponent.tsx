import React from "react";
import ChrisComponent from "./chrisComponent";
import ResendComponent from "./resendComponent";

function HomeComponent() {
  return (
    <div className="w-full xl:w-3/4 flex flex-col items-center justify-start pt-0 xl:pt-[200px]">
      <ChrisComponent />
      <ResendComponent />
    </div>
  );
}
export default HomeComponent;
