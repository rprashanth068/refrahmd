import * as React from "react";
import {
  Button,
  FormWrapper,
  Row,
  Text,
  Title,
  Table,
  Space
} from "../../core";
import { defaultMargin } from "../../../services/defaultValue";

export interface ILandOwnerProps {
  data: Array<Object>;
}

export const LandOwner: React.FC<ILandOwnerProps> = ({ data }) => {
  return (
    <>
      <Title title={"Landowner Information - as seen on Title"} />
      <FormWrapper>
        {/* Row 1 */}
        <Row>
          <Text title={"First Name"} type={"text"} width={"100px"} />
          <Text title={"Middle Name"} type={"text"} width={"80px"} />
          <Text title={"Last Name"} type={"text"} width={"120px"} />
        </Row>

        {/* Row 2 */}
        <Row>
          <Text title={"Adress"} type={"text"} width={"195px"} />
          <Text title={"City/Municipality"} type={"text"} width={"120px"} />
          <Text title={"Province"} type={"text"} width={"80px"} />
          <Text
            title={"Postal/Zip Code"}
            type={"text"}
            width={"120px"}
            textWidth={"60px"}
          />

          <Space />
          <Button icon={"New"} title={"Add"} click={() => ""} />
          <Button icon={"Save"} title={"Save"} click={() => ""} />
        </Row>
      </FormWrapper>

      <Row padding={`0px ${defaultMargin}px`}>
        <Button icon={"Edit"} click={() => ""} />
        <Button icon={"Save"} click={() => ""} />
        <Table
          data={data}
          title={["Name", "Address", "City/MD", "Province", "Postal/Zip"]}
          size={"20fr 30fr 15fr 12fr 15fr"}
        />
      </Row>
    </>
  );
};
