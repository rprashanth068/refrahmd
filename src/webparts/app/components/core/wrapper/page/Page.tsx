import * as React from "react";
import style from "./Page.module.scss";

export interface IPageProps {}

export const Page: React.FC<IPageProps> = props => {
  return <div className={style.page}>{props.children}</div>;
};
