import * as React from "react";
import style from "./Text.module.scss";

export interface ITextProps {
  height?: string;
  title?: string;
  width?: string;
  type?: string;
  name?: string;
  disabled?: boolean;
  textWidth?: string;
}

export const Text: React.FC<ITextProps> = ({
  width,
  height,
  type,
  title,
  name,
  disabled,
  textWidth
}) => {
  const blockStyle = width && { width: width, flex: "none" };
  const inputStyle = textWidth
    ? { minHeight: height, width: textWidth, flex: "none" }
    : { minHeight: height };

  return (
    <div className={style.frmBlock} style={blockStyle}>
      {title && <label>{title}</label>}
      <input
        style={inputStyle}
        disabled={disabled}
        type={type}
        name={name}
      ></input>
    </div>
  );
};
