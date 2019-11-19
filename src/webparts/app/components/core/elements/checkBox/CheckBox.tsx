import * as React from "react";
import stylee from "./CheckBox.module.scss";

export interface ICheckBoxProps {
  title?: string;
}

export const CheckBox: React.FC<ICheckBoxProps> = ({ title }) => {
  const [icon, setIcon] = React.useState("");
  const [checkboxStyle, setCheckBoxStyle] = React.useState({});

  const handleCheck = e => {
    if (e.target.checked) {
      setIcon("./img/NRD-00001_02013_ICO_Checkbox ff6600_001.svg");
      setCheckBoxStyle({
        border: "none",
        backgroundColor: "transparent",
        kkk: ""
      });
    } else {
      setIcon("");
      setCheckBoxStyle({});
    }
  };

  return (
    <div className={stylee.styledCheckbox}>
      <input
        type="checkbox"
        onChange={e => handleCheck(e)}
        style={checkboxStyle}
      />
      <img src={icon} alt="" />
      {title && <label>{title}</label>}
    </div>
  );
};
