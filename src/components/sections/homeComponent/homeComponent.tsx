import React from "react";
import ChrisComponent from "./chrisComponent";
import ResendComponent from "./resendComponent";

function HomeComponent() {
  return (
    <div className="w-full flex flex-col items-center justify-start">
      <ChrisComponent />
      <ResendComponent />
    </div>
  );
}
export default HomeComponent;
