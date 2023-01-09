import React from "react";
import FlexItem4_1 from "./FlexItem4_1";
import { useState, useRef, useEffect } from "react";
import { IDataInput } from "./IDataInput";
//import Display from "./Display";
import "./myStyles.css";
type multipleDataAsProps = {
  values: IDataInput;
  data: IDataInput[];
  deleteData: (id: number) => void;
};
//<Display data={props.data}/>
function DisplayDataInAddressBook(props: multipleDataAsProps) {
  let DisplayData = (id: number, data: IDataInput[]) => {
    data.map((x: any, y: any) => {
      if (y == id) {
        var id1 = document.getElementById(y.toString()) as HTMLDivElement;
        id1.style.backgroundColor = "#ADD8E6";
      } else {
        var id1 = document.getElementById(y.toString()) as HTMLDivElement;
        id1.style.backgroundColor = "white";
      }
    });
    data.map((x: any, y: any) => {
      if (y == id) {
        document.getElementsByClassName(
          "flexItem4-3"
        )[0].innerHTML = `<label id="headingStyling">${x.name}</label><table class="tableStyling3">
    <tr>
    <td class="tableDataStyling1">Email:</td>
      <td class="tableDataStyling1">${x.email}</td>
    </tr>
    <tr>
    <td id="tableDataStyling2">Mobile:</td>
      <td id="tableDataStyling2">${x.mobile}</td>
    </tr>
    <tr><td class="tableDataStyling1">LandLine:</td>
      <td class="tableDataStyling1">${x.landLine}</td>
    </tr>
    <tr>
    <td class="tableDataStyling1">Website:</td>
      <td class="tableDataStyling1">${x.webSite}</td>
    </tr>
    <tr>
    <td class="tableDataStyling1" id="addressStyling1">Address:</td>
      <td class="tableDataStyling1" id="addressStyling2"><span>${x.address}<span/></td>
  
    </tr>
  
  </table>`;
      }
    });
    data.map((x: any, y: any) => {
      if (y == id) {
        props.deleteData(y);
      }
    });
  };
  return (
    <div>
      {props.data.length > 0 ? (
        <>
          {props.data.map((x: any, y: number) => {
            return (
              <div
                id={y.toString()}
                key={y}
                className="divStyling"
                onClick={() => DisplayData(y, props.data)}
              >
                <div>
                  <span id="nameStyling">{x.name}</span>
                </div>
                <div>
                  <span id="emailStyling">{x.email}</span>
                  <br></br>
                  <span id="mobileNumberStyling">+91 {x.mobile}</span>
                </div>
              </div>
            );
          })}
        </>
      ) : null}
    </div>
  );
}

export default DisplayDataInAddressBook;
