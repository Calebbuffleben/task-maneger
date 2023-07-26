import React, { ReactNode } from "react";

type IPageContainerComponentProps = {
  children: ReactNode;
}

const PageContainerComponent = ({ children}: IPageContainerComponentProps) => (
  <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    {children}
  </div>
)

export default PageContainerComponent;
