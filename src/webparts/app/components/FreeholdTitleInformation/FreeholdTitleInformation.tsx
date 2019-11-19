import * as React from "react";
import {
  Button,
  OptionBar,
  TitleBar,
  Row,
  Table,
  Seprator,
  Text,
  Page,
  Label
} from "../core";
import { LegalDescription } from "./components/LegalDescription";
import { LandOwner } from "./components/LandOwner";
import { Encumbrances } from "./components/Encumbrances";
import { mock2, mock1, defaultMargin } from "../../services/defaultValue";

export interface IForm1Props {}

const Form: React.FC<IForm1Props> = ({}) => {
  return (
    <Page>
      {/* Title bar */}
      <TitleBar title={"title test"} />

      {/* Option Bar */}
      <OptionBar>
        <Button icon={"Save"} type={"submit"} light click={() => ""} />
        <Button icon={"Delete"} light />
      </OptionBar>

      {/* LegalDescription */}
      <LegalDescription data={mock1} />
      <Seprator />

      {/* Land Owner */}
      <LandOwner data={mock2} />
      <Seprator />

      {/* Encumbrances */}
      <Encumbrances />
      <Seprator />

      {/* Table */}
      <Row padding={`0 ${defaultMargin}px`}>
        <Button icon={"Edit"} />
        <Button icon={"Save"} />
        <Table
          data={mock2}
          title={["Name", "Address", "City/MD", "Province", "Postal/Zip"]}
          size={"20fr 30fr 15fr 12fr 15fr"}
        />
      </Row>
      <Seprator />

      {/* Table */}
      <Row padding={`0 ${defaultMargin}px`}>
        <Button icon={"Edit"} />
        <Button icon={"Save"} />
        <Text />
        <Button icon={"New"} />
        <Table
          data={mock2}
          title={["Name", "Address", "City/MD", "Province", "Postal/Zip"]}
          size={"20fr 30fr 15fr 12fr 15fr"}
        />
      </Row>
    </Page>
  );
};

export default Form;
