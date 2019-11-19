import * as React from "react";
import {
  Button,
  FormWrapper,
  Row,
  Text,
  DropDown,
  Table,
  Space,
  Title,
  TextArea
} from "../../core";

export interface ILegalDescriptionProps {
  data: Array<Object>;
}

export const LegalDescription: React.FC<ILegalDescriptionProps> = ({
  data
}) => {
  return (
    <>
      <Title title={"Legal Description - as seen on Title"} />
      <FormWrapper>
        {/* Row 1 */}
        <Row>
          <Text title={"Title Number"} type={"text"} width={"15%"} />
          <Text title={"Municipality"} type={"text"} width={"40%"} />
          <DropDown
            width={"15%"}
            options={[
              { value: "aaa", text: "test" },
              { value: "aa", text: "test2" }
            ]}
            title={"Status of Title"}
          />
          <Space />
          <Button icon={"New"} title={"Add"} click={() => ""} />
          <Button icon={"Save"} title={"Save"} click={() => ""} />
        </Row>

        {/* Row 2 */}
        <Row>
          <Text
            title={"Ling Number/Parcel ID"}
            type={"text"}
            textWidth={"15%"}
          />
        </Row>

        {/* Row 3 */}
        <Row>
          <DropDown
            options={[
              { value: "aaa", text: "test" },
              { value: "aa", text: "test2" }
            ]}
            width={"25%"}
            selectWidth={"60%"}
            title={"Short Legal Description / NTS"}
          />
        </Row>

        {/* Row 4 */}
        <Row>
          <Text title={"1/4 Section"} type={"text"} width={"35px"} />

          <Space />
          <Text title={"Sec."} type={"number"} width={"30px"} />
          <Text title={"Twp."} type={"number"} width={"30px"} />
          <Text title={"Rng."} type={"number"} width={"30px"} />
          <Text title={"Mer."} type={"text"} width={"45px"} />
          <Space />

          <Text title={"Ext."} type={"number"} width={"40px"} />
          <Space />

          <Text title={"Lot"} type={"text"} width={"35px"} />
          <Text title={"Block"} type={"number"} width={"35px"} />
          <Text title={"Plan"} type={"number"} width={"45px"} />
          <Space />

          <Text title={"Partition"} type={"text"} width={"60px"} />
          <Text title={"Areas"} type={"number"} width={"60px"} />
        </Row>

        {/* Row 5  Tabel*/}
        <Row>
          <Button icon={"Edit"} click={() => ""} />
          <Button icon={"Save"} click={() => ""} />
          <Table
            data={data}
            title={["Legal Location", "Linc Number/Parcel ID"]}
            size={"30fr 10fr "}
          />
        </Row>

        {/* Row 6 */}
        <Row>
          <TextArea
            title={"Legal Description from Title"}
            height={"150px"}
          ></TextArea>
        </Row>
      </FormWrapper>
    </>
  );
};
