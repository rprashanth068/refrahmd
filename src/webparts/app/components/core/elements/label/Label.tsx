import * as React from "react";
import stylee from "./Label.module.scss";

export interface ILabelProps {
  title: string;
}

export const Label: React.FC<ILabelProps> = ({ title }) => {
  return <label className={stylee.label}>{title}</label>;
};
