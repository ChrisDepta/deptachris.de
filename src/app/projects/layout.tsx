import React from "react";

type Props = {
  children: string;
};

export default function layout({ children }: Props) {
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col items-center">
      {children}
    </div>
  );
}
