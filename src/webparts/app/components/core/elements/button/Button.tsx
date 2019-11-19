import * as React from "react";
import stylee from "./Button.module.scss";

export interface IButtonProps {
  icon: string;
  title?: string;
  type?: string;
  light?: boolean;
  click?: Function;
}

export const Button: React.FC<IButtonProps> = ({
  icon,
  type,
  title,
  light,
  click
}) => {
  const [img] = React.useState(
    light
      ? "./img/NRD-00001_02013_ICO_" + icon + " cccccc_001.svg"
      : "./img/NRD-00001_02013_ICO_" + icon + " 52525b_001.svg"
  );
  const [imgHover] = React.useState(
    "./img/NRD-00001_02013_ICO_" + icon + " ff6600_001.svg"
  );
  const [srcc, setSrcc] = React.useState(`${img}`);

  return (
    <button
      style={title ? { height: "40px" } : { height: "24px" }}
      type={type}
      className={stylee.btn}
      onMouseEnter={() => {
        setSrcc(imgHover);
      }}
      onMouseLeave={() => {
        setSrcc(img);
      }}
      onClick={e => {
        e.preventDefault();
        click && click();
      }}
    >
      <img src={srcc} style={title && { marginTop: "8px" }} />
      {title && <span>{title}</span>}
    </button>
  );
};
