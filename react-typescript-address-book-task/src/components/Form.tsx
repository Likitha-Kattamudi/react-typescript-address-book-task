import React from "react";
import "./myStyles.css";
function Form() {
  const mobileLabelStyling = { color: "red", visibility: "hidden" } as const;
  const landLineLabelStyling = { color: "red", visibility: "hidden" } as const;
  const validationMessageStyling = { alignItems: "center" } as const;
  const emailLabelStyling = { color: "red", visibility: "hidden" } as const;
  return (
    <div className="center">
      <form>
        <table className="mainTableStyling">
          <tr>
            <td colSpan={2} style={validationMessageStyling}>
              <b id="validationMessage" className="validationStyling"></b>
            </td>
          </tr>
          <tr>
            <td>Name</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input id="name" className="tableStyling1" />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              Email
              <label id="labelText1" style={emailLabelStyling}>
                Enter valid Email
              </label>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input id="email" className="tableStyling1" />
            </td>
          </tr>
          <tr>
            <td>
              Mobile
              <label style={mobileLabelStyling} id="labelText2">
                Enter valid Mobile Number
              </label>
            </td>
            <td>
              Landline
              <label id="labelText3" style={landLineLabelStyling}>
                Enter valid LandLine Number
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <input id="mobile" className="tableStyling2" />
            </td>
            <td>
              <input id="landLine" className="tableStyling2" />
            </td>
          </tr>
          <tr>
            <td>Website</td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input id="webSite" className="tableStyling1" />
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
                className="tableStyling1"
                id="address"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan={3}>
              <button type="submit" id="button1">
                Add
              </button>
              <button id="button2">Close</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Form;
