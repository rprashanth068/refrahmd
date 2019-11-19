import * as React from "react";
import stylee from "./Title.module.scss";
export interface ITitleProps {
  title: string;
}

export const Title: React.FC<ITitleProps> = ({ title }) => {
  return <div className={stylee.title}>{title}</div>;
};
