import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ItemMeta } from "semantic-ui-react";
import uuid from "uuid/v4";
import Input from "./Input";
import { updateResume } from "../../actions/app.actions";
import Button from "./Buttons/Button";

const Project = (props) => {
  const { dispatch, resume, tools } = props;
  const { autoSave } = tools;
  const [formData, setFormData] = useState(resume.projects || []);

  const handleEducationInputChange = (event, keyIndex) => {
    const { name, value } = event.target;
    const currData = [...formData];
    currData[keyIndex][name] = value;
    setFormData(currData);
  };

  const handleSave = () => {
    const currResume = { ...resume };
    currResume.education = [...formData];

    dispatch(updateResume(currResume, autoSave));
  };
  //   console.log(Resume);

  return (
    <section style={{ backgroundColor: "skyblue" }} className="formContainer">
      <h1 className="formTitlePrimary">Project Info</h1>
      <div className="formInputContainer basicInfo">
        {formData.map((item, keyIndex) => (
          <div key={keyIndex}>
            <div className="formField">
              <label htmlFor="name" className="formLabel">
                Project Name
              </label>

              <Input
                type={"text"}
                handleChange={(e) => handleEducationInputChange(e, keyIndex)}
                value={item.name}
                name={"name"}
                placeholder={"project name"}
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
            <div className="formField">
              <label htmlFor="link" classlink="formLabel">
                Project Link
              </label>

              <Input
                type={"text"}
                handleChange={(e) => handleEducationInputChange(e, keyIndex)}
                value={item.link}
                name={"link"}
                placeholder={"project link"}
                className={"formInput"}
              />
            </div>
            <div className="formField">
              <label htmlFor="teamBrief" className="formLabel">
                Team Details in Brief
              </label>

              <Input
                type={"text"}
                handleChange={(e) => handleEducationInputChange(e, keyIndex)}
                value={item.teamBrief}
                name={"teamBrief"}
                placeholder={"project teamBrief"}
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
       name: "Project 1",
      dateFrom: "XX/XXXX",
      dateTo: "",
      link: "http://website.com",
      teamBrief: "1-person project",
      details: ["Detail 1", "Detail 2", "http://projectLink.com"],
      isVisible: true,

*/

const mapStateToProps = (state) => ({
  resume: state.resume,
  resumeFormOpen: state.app.resumeFormOpen,
  tools: state.tools,
});

export default connect(mapStateToProps)(Project);
