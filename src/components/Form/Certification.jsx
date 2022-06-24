import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ItemMeta } from "semantic-ui-react";
import uuid from "uuid/v4";
import Input from "./Input";
import { updateResume } from "../../actions/app.actions";
import Button from "./Buttons/Button";

const Education = (props) => {
  const { dispatch, resume, tools } = props;
  const { autoSave } = tools;
  const [formData, setFormData] = useState(resume.certification || []);

  const handleEducationInputChange = (event, keyIndex) => {
    const { name, value } = event.target;
    const currData = [...formData];
    currData[keyIndex][name] = value;
    setFormData(currData);
  };

  const handleSave = () => {
    const currResume = { ...resume };
    currResume.education = [...formData];
    // console.log(currResume);
    dispatch(updateResume(currResume, autoSave));
  };
  //   console.log(Resume);

  return (
    <section style={{ backgroundColor: "skyblue" }} className="formContainer">
      <h1 className="formTitlePrimary">Certification Info</h1>
      <div className="formInputContainer basicInfo">
        {formData.map((item, keyIndex) => (
          <div key={keyIndex}>
            <div className="formField">
              <label htmlFor="issuedBy" className="formLabel">
                Issued by
              </label>

              <Input
                type={"text"}
                handleChange={(e) => handleEducationInputChange(e, keyIndex)}
                value={item.issuedBy}
                name={"issuedBy"}
                placeholder={"institution"}
                className={"formInput"}
              />
            </div>
            <div className="formField">
              <label htmlFor="id" className="formLabel">
                Certificate Id
              </label>

              <Input
                type={"text"}
                handleChange={(e) => handleEducationInputChange(e, keyIndex)}
                value={item.id}
                name={"id"}
                placeholder={"institution"}
                className={"formInput"}
              />
            </div>
            <div className="formField">
              <label htmlFor="dateFrom" className="formLabel">
                Date From
              </label>

              <Input
                type={"date"}
                handleChange={(e) => handleEducationInputChange(e, keyIndex)}
                value={item.dateFrom}
                name={"dateFrom"}
                placeholder={"institution"}
                className={"formInput"}
              />
            </div>
            <div className="formField">
              <label htmlFor="dateTo" className="formLabel">
                Date To
              </label>

              <Input
                type={"date"}
                handleChange={(e) => handleEducationInputChange(e, keyIndex)}
                value={item.dateTo}
                name={"dateTo"}
                placeholder={"institution"}
                className={"formInput"}
              />
            </div>
          </div>
        ))}
      </div>
      <Button className="saveBtn" handleClick={handleSave} btnText={"Update"} />
    </section>
  );
};

/*
       issuedBy: "Issuer 1/Cert Name",
      id: "#12345",
      dateFrom: "XX/XXXX",
      dateTo: "",
      isVisible: true,

*/

const mapStateToProps = (state) => ({
  resume: state.resume,
  resumeFormOpen: state.app.resumeFormOpen,
  tools: state.tools,
});

export default connect(mapStateToProps)(Education);
