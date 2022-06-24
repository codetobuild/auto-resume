import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ItemMeta } from "semantic-ui-react";
import uuid from "uuid/v4";
import Input from "./Input";
import { updateResume } from "../../actions/app.actions";
import Button from "./Buttons/Button";

const Experience = (props) => {
  const { dispatch, resume, tools } = props;
  const { autoSave } = tools;
  const [formData, setFormData] = useState(resume.experience || []);

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
      <h1 className="formTitlePrimary">Work Experience</h1>
      <div className="formInputContainer basicInfo">
        {formData.map((item, keyIndex) => (
          <div key={keyIndex}>
            <div className="formField">
              <label htmlFor="company" className="formLabel">
                Company
              </label>

              <Input
                type={"text"}
                handleChange={(e) => handleEducationInputChange(e, keyIndex)}
                value={item.company}
                name={"company"}
                placeholder={"company"}
                className={"formInput"}
              />
            </div>
            <div className="formField">
              <label htmlFor="city" className="formLabel">
                city
              </label>

              <Input
                type={"text"}
                handleChange={(e) => handleEducationInputChange(e, keyIndex)}
                value={item.city}
                name={"city"}
                placeholder={"city"}
                className={"formInput"}
              />
            </div>
            <div className="formField">
              <label htmlFor="position" className="formLabel">
                Position
              </label>

              <Input
                type={"text"}
                handleChange={(e) => handleEducationInputChange(e, keyIndex)}
                value={item.position}
                name={"position"}
                placeholder={"position"}
                className={"formInput"}
              />
            </div>
            <div className="formField">
              <label htmlFor="primaryWorkBrief" className="formLabel">
                Brief Description
              </label>
              <Input
                type={"text"}
                handleChange={(e) => handleEducationInputChange(e, keyIndex)}
                value={item.primaryWorkBrief}
                name={"primaryWorkBrief"}
                placeholder={"brief description"}
                className={"formInput"}
              />
            </div>
            <div className="formField">
              <label htmlFor="impact1" className="formLabel">
                Other Detail 1
              </label>
              <Input
                type={"text"}
                handleChange={(e) => handleEducationInputChange(e, keyIndex)}
                value={item.impact1}
                name={"impact1"}
                placeholder={"brief description"}
                className={"formInput"}
              />
            </div>
            <div className="formField">
              <label htmlFor="impact2" className="formLabel">
                Other Detail 2
              </label>
              <Input
                type={"text"}
                handleChange={(e) => handleEducationInputChange(e, keyIndex)}
                value={item.impact2}
                name={"impact2"}
                placeholder={"brief description"}
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
      company: "Experience 1",
      city: "City",
      state: "CA",
      position: "Position 1",
      dateFrom: "XX/XXXX",
      dateTo: "",
      primaryWorkBrief: "Brief description of your main tasks.",
      impact1: "Something awesome you did 1.",
      impact2: "Something awesome you did 2.",
      impact3: "",
      impact4: "",

*/

const mapStateToProps = (state) => ({
  resume: state.resume,
  resumeFormOpen: state.app.resumeFormOpen,
  tools: state.tools,
});

export default connect(mapStateToProps)(Experience);
