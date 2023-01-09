import React, { useState, useEffect } from "react";
import "./myStyles.css";
import Edit from "./edit1.jpg";
import Delete from "./delete2.png";
import Swal from "sweetalert2";
import MicrosoftTeamsImage from "./MicrosoftTeams-image.png";
import Contacts from "./Contacts";
import FlexItem4_1 from "./FlexItem4_1";
import { IDataInput } from "./IDataInput";

function Bottom() {
  const imgStyling = { paddingTop: "3px" };
  var y: IDataInput[];
  var [countAsProps, setcountAsProps] = useState(0);
  var [data, setMyData] = useState<IDataInput[]>([]);
  let [Id, setId] = useState(0);
  let [previousId, setPreviousId] = useState(0);
  const initialFieldValues = {
    name: "",
    email: "",
    mobile: "",
    landLine: "",
    webSite: "",
    address: "",
  };
  let count = 0;
  let [controlVariable, setControlVariable] = useState(0);
  let [address, setAddress] = useState("");
  let [isValid, setIsValid] = useState(false);
  let [values, setValues] = useState(initialFieldValues);
  //let [isValid2, setIsValid2] = useState(false);

  const handleClickOfMainAddButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    document.getElementsByClassName("flexItem4-3")[0].innerHTML = "";
    var id1 = document.getElementById("addNewMember") as HTMLButtonElement;
    id1.classList.remove("hoverOnDivision2");
    id1.classList.add("homeButtonStyling");
    var id2 = document.getElementById("homeButton") as HTMLButtonElement;
    id2.classList.remove("homeButtonStyling");
    var id3 = document.getElementsByClassName(
      "flexItem4-2"
    )[0] as HTMLDivElement;
    id3.style.display = "block";
    var hideIcons = document.getElementsByClassName(
      "flexItem4-4"
    )[0] as HTMLDivElement;
    hideIcons.style.display = "none";
  };

  var id2 = document.getElementsByClassName(
    "homeButtonStyling"
  )[0] as HTMLButtonElement;

  const handleClickOfCloseButton = () => {
    id2.classList.remove("homeButtonStyling");
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  var handleAddressInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAddress((event.target as HTMLTextAreaElement).value);
    address = (event.target as HTMLTextAreaElement).value;
    values.address = address;
  };
  const handleClickOfSubAddButton = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    formValidation();
  };

  const formValidation = () => {
    count = 0;

    if (
      values.name == "" ||
      values.mobile == "" ||
      values.landLine == "" ||
      values.email == "" ||
      values.address == "" ||
      values.webSite == ""
    ) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: "Please fill all the required fields below",
      });
    }
    if (values.name == "" || values.address == "" || values.webSite == "") {
    } else {
      count = count + 1;
    }
    if (values.email != "") {
      var regx1 = /^([a-z])([a-z 0-9]+)@([a-z]+)\.([a-z]+)$/;
      if (!regx1.test(values.email)) {
        Swal.fire({
          title: "Error",
          html:
            "<ul>" +
            "<li>Email Format Should be xyz123@gmail.com</li>" +
            "<li>MobileNumber should be 10 digits</li>" +
            "<li>LandLine should be 12 digits</li>" +
            "</ul>",
          icon: "error",
        });
      } else {
        count = count + 1;
      }
    }
    if (values.mobile != "") {
      var regx2 = /^[7-9][0-9]{9}$/;
      if (!regx2.test(values.mobile)) {
        Swal.fire({
          title: "Error",
          icon: "error",
          html:
            "<ul>" +
            "<li>Email Format Should be xyz123@gmail.com</li>" +
            "<li>MobileNumber should be 10 digits</li>" +
            "<li>LandLine should be 12 digits</li>" +
            "</ul>",
        });
      } else {
        count = count + 1;
      }
    }
    if (values.landLine != "") {
      var regx3 = /^[0][0-9]{11}$/;
      if (!regx3.test(values.landLine)) {
        Swal.fire({
          title: "Error",
          html:
            "<ul>" +
            "<li>Email Format Should be xyz123@gmail.com</li>" +
            "<li>MobileNumber should be 10 digits</li>" +
            "<li>LandLine should be 12 digits</li>" +
            "</ul>",
          icon: "error",
        });
      } else {
        count = count + 1;
      }
    }
    if (count == 4) {
      Swal.fire({
        title: "Success",
        icon: "success",
        text: "Form is successfully submitted",
      });
      setcountAsProps(4);
      var id2 = document.getElementById("homeButton") as HTMLButtonElement;
      id2.classList.add("homeButtonStyling");
      if (controlVariable == 1) {
        deleteDataInBottom();
      }
      acceptData();
    }
  };

  let acceptData = () => {
    y = JSON.parse(localStorage.getItem("data")!) || [];
    data = y;
    data.push(values);
    setMyData(data);
    localStorage.setItem("data", JSON.stringify(data));
    createTasks();
  };
  let createTasks = () => {
    y = JSON.parse(localStorage.getItem("data")!) || [];
    setMyData(y);
    setIsValid(true);
    resetForm();
  };
  let resetForm = () => {
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("email") as HTMLInputElement).value = "";
    (document.getElementById("webSite") as HTMLInputElement).value = "";
    (document.getElementById("mobile") as HTMLInputElement).value = "";
    (document.getElementById("landLine") as HTMLInputElement).value = "";
    (document.getElementById("address") as HTMLTextAreaElement).value = "";

    var id1 = document.getElementById("addNewMember") as HTMLButtonElement;
    id1.classList.add("hoverOnDivision2");
    id1.classList.remove("homeButtonStyling");
    var id2 = document.getElementById("homeButton") as HTMLButtonElement;
    id2.classList.add("homeButtonStyling");
    var flexItem4_2 = document.getElementsByClassName(
      "flexItem4-2"
    )[0] as HTMLDivElement;
    flexItem4_2.style.display = "none";
    var flexItem4_4 = document.getElementsByClassName(
      "flexItem4-4"
    )[0] as HTMLDivElement;
    flexItem4_4.style.display = "block";
  };

  const deleteData = (id: number) => {
    Id = id;
  };

  const deleteDataInBottom = () => {
    if (controlVariable == 1) {
      var id1 = document.getElementById(Id.toString()) as HTMLDivElement;
      id1.style.backgroundColor = "white";
      data.splice(previousId, 1);
      localStorage.clear();
      localStorage.setItem("data", JSON.stringify(data));
      data = JSON.parse(localStorage.getItem("data")!);
      setControlVariable(0);
      createTasks();
      Id = -1;
    } else {
      if (Id != undefined && Id != -1) {
        Swal.fire({
          title: "Are you sure, you want to delete the record?",
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: `Ok`,
          denyButtonText: `Cancel`,
        }).then((result) => {
          if (result.isConfirmed) {
            if (Id != undefined && Id != -1) {
              document.getElementsByClassName("flexItem4-3")[0].innerHTML = "";
              data.splice(Id, 1);
              localStorage.clear();
              localStorage.setItem("data", JSON.stringify(data));
              data = JSON.parse(localStorage.getItem("data")!);
              createTasks();
              var id1 = document.getElementById(
                Id.toString()
              ) as HTMLDivElement;
              id1.style.backgroundColor = "white";
              Id = -1;
            }
          } else {
            Swal.fire("Record not deleted");
          }
        });
      }
    }
  };

  const editDataInBottom = () => {
    let flexItem4_2 = document.getElementsByClassName(
      "flexItem4-2"
    )[0] as HTMLDivElement;
    flexItem4_2.style.display = "block";
    let flexItem4_4 = document.getElementsByClassName(
      "flexItem4-4"
    )[0] as HTMLDivElement;
    flexItem4_4.style.display = "none";
    let flexItem4_3 = document.getElementsByClassName(
      "flexItem4-3"
    )[0] as HTMLDivElement;
    flexItem4_3.innerHTML = "";
    data.map((x: any, y: any) => {
      if (y == Id) {
        values = x;
      }
    });

    (document.getElementById("name") as HTMLInputElement).value = values.name;
    (document.getElementById("email") as HTMLInputElement).value = values.email;
    (document.getElementById("webSite") as HTMLInputElement).value =
      values.webSite;
    (document.getElementById("mobile") as HTMLInputElement).value =
      values.mobile;
    (document.getElementById("landLine") as HTMLInputElement).value =
      values.landLine;
    (document.getElementById("address") as HTMLTextAreaElement).value =
      values.address;

    /*for (const key in values) {
      console.log(key);
      var key2=key;
      key2 = convertStringToProperty(key);
      setValues({ ...values, [key]: values[key2] });
    }*/
    setValues({
      name: values.name,
      address: values.address,
      webSite: values.webSite,
      mobile: values.mobile,
      email: values.email,
      landLine: values.landLine,
    });
    setControlVariable(1);
    setPreviousId(Id);
    setId(Id);
  };

  useEffect(() => {
    y = JSON.parse(localStorage.getItem("data")!) || [];
    data = y;
    isValid = true;
    setControlVariable(0);
    createTasks();
  }, []);

  return (
    <div>
      <div className="container2">
        <div className="item2-1">
          <button
            className=" homeButtonStyling hoverOnDivision1 buttonStyling1 "
            id="homeButton"
          >
            Home
          </button>
        </div>
        <div className="item2-1">
          <button
            className="hoverOnDivision2 hoverOnDivision1 buttonStyling1 "
            id="addNewMember"
            onClick={handleClickOfMainAddButton}
          >
            +Add
          </button>
        </div>
        <div id="item2-2">
          <img
            src={MicrosoftTeamsImage}
            alt="MicrosoftImage"
            width="20px"
            height="20px"
            style={imgStyling}
          />
        </div>
      </div>
      <Contacts />
      <div className="container4">
        {isValid ? (
          <FlexItem4_1
            values={values}
            data={data}
            count={countAsProps}
            deleteData={deleteData}
          />
        ) : null}
        <div className="flexItem4-2">
          <form>
            <table className="mainTableStyling">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Name</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <input
                      onChange={handleInputChange}
                      id="name"
                      name="name"
                      className="tableStyling1"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <input
                      id="email"
                      name="email"
                      className="tableStyling1"
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td>Landline</td>
                </tr>
                <tr>
                  <td>
                    <input
                      id="mobile"
                      name="mobile"
                      className="tableStyling2"
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      id="landLine"
                      name="landLine"
                      className="tableStyling2"
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Website</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <input
                      id="webSite"
                      name="webSite"
                      className="tableStyling1"
                      onChange={handleInputChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Address</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <textarea
                      rows={6}
                      cols={30}
                      name="address"
                      className="tableStyling1"
                      id="address"
                      onChange={handleAddressInput}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <button
                      type="submit"
                      id="button1"
                      onClick={handleClickOfSubAddButton}
                    >
                      Add
                    </button>
                    <button id="button2" onClick={handleClickOfCloseButton}>
                      Close
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
        <div className="flexItem4-3"></div>
        <div className="flexItem4-4">
          <table>
            <thead></thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src={Edit}
                    width="15px"
                    height="15px"
                    id="editDetails"
                    onClick={() => editDataInBottom()}
                  />
                </td>
                <td>
                  <span className="editDeleteStyling">EDIT</span>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <img
                    src={Delete}
                    width="15px"
                    height="25px"
                    id="deleteDetails"
                    onClick={() => deleteDataInBottom()}
                  />
                </td>
                <td>
                  <span className="editDeleteStyling">DELETE</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
