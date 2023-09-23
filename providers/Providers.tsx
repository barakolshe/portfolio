import { FunctionComponent, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  return <>{children}</>;
};

export default Providers;
