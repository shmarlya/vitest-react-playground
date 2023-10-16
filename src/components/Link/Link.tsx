import React from "react";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = {
  to: string;
  children: React.ReactNode;
};

const Link: React.FC<LinkProps> = ({ to, children }) => {
  return <RouterLink to={to}>{children}</RouterLink>;
};

export default Link;
