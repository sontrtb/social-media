import { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

function Content({ children }: ContentProps) {
  return <div>{children}</div>;
}

export default Content;
