import * as React from "react";
import style from "./TitleBar.module.scss";
import { Button } from "../..";

export interface ITitleBarProps {
  title: string;
}

export const TitleBar: React.FC<ITitleBarProps> = ({ title }) => {
  return (
    <div className={style.titleBar}>
      <div className={style.title}>{title}</div>
      <Button icon={"Exit"} light />
    </div>
  );
};
