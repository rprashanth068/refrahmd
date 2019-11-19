import * as React from "react";
import style from "../assets/style/app.module.scss";
import { IAppProps } from "./IAppProps";
import FreeholdTitleInformation from "./FreeholdTitleInformation/FreeholdTitleInformation";

export const defaultMargin = 10;

export default class App extends React.Component<IAppProps, {}> {
  public render(): React.ReactElement<IAppProps> {
    return (
      <div className={style.main}>
        <FreeholdTitleInformation />
      </div>
    );
  }
}
