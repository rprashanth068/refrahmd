import * as React from "react";
import style from "./FormWrapper.module.scss";

export interface IFormProps {}

export const FormWrapper: React.FC<IFormProps> = props => {
  return (
    <div className={style.myForm}>
      <form className={style.form}>{props.children}</form>
    </div>
  );
};
