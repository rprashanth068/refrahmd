import * as React from "react";
import {
  Button,
  FormWrapper,
  Row,
  Text,
  Table,
  Space,
  TextArea,
  CheckBox,
  Label,
  Title
} from "../../core";
import { defaultMargin, mock2 } from "../../../services/defaultValue";

export interface IEncumbrancesProps {}

export const Encumbrances: React.FC<IEncumbrancesProps> = ({}) => {
  return (
    <>
      <Title title={"Encumbrances, Lines & Intrests - as seen on Title"} />
      <FormWrapper>
        {/* Row 1 */}
        <Row align={"flex-start"}>
          <Text title={"Registration Number"} type={"text"} width={"15%"} />
          <Text title={"Date"} type={"date"} width={"17%"} />
          <TextArea title={"Particularts"} height={"40px"} />
          <Text title={"ATS Refrences"} width={"20%"} />
        </Row>

        {/* Row 2 */}
        <Row margin={`-${defaultMargin * 3.5}px 0 0 0`} align={"center"}>
          <CheckBox title={"Is this required?"} />
          <Space />
          <Button icon={"New"} title={"Add"} click={() => ""} />
          <Button icon={"Save"} title={"Save"} click={() => ""} />
        </Row>
      </FormWrapper>

      {/* Table */}
      <Row
        padding={`${defaultMargin / 2}px`}
        margin={`-${defaultMargin}px 0 0 0`}
      >
        <Button icon={"Edit"} click={() => ""} />
        <Button icon={"Save"} click={() => ""} />
        <Table
          data={mock2}
          title={["Name", "Address", "City/MD", "Province", "Postal/Zip"]}
          size={"20fr 30fr 15fr 12fr 15fr"}
        />
        <Row
          margin={`-${defaultMargin}px 0 0 0`}
          padding={`${defaultMargin / 2}px 0px`}
        >
          <Label title={"Total Instruments"} />
          <Label title={"5"} />
        </Row>
      </Row>
    </>
  );
};
