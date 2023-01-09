import React from "react";
import DisplayDataInAddressBook from "./DisplayDataInAddressBook";
import { IDataInput } from "./IDataInput";
import "./myStyles.css";
type multipleDataAsProps = {
  values: IDataInput;
  data: IDataInput[];
  count: number;
  deleteData: (id: number) => void;
};
function FlexItem4_1(props: multipleDataAsProps) {
  return (
    <div className="flexItem4-1">
      <div>
        <DisplayDataInAddressBook
          values={props.values}
          data={props.data}
          deleteData={props.deleteData}
        />
      </div>
    </div>
  );
}

export default FlexItem4_1;
