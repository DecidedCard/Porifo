import React, { PropsWithChildren } from "react";

const nonAuthLayout = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

export default nonAuthLayout;
