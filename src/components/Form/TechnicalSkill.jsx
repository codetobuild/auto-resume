import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ItemMeta } from "semantic-ui-react";
import uuid from "uuid/v4";
import Input from "./Input";
import { updateResume } from "../../actions/app.actions";
import Button from "./Buttons/Button";

const TechnicalSkill = (props) => {
  const { dispatch, resume, tools } = props;
  const { autoSave } = tools;
  const [formData, setFormData] = useState(resume.technicalSkills || []);
  const splitKeywords = (keywords) =>
    keywords
      .split(",")
      .map((d) => d.trim())
      .filter((d) => d.length > 0);

  const handleInputChange = (event, keyIndex) => {
    const { name, value } = event.target;
    const keywordsArray = splitKeywords(value);
    console.log(keywordsArray);
    const currData = [...formData];
    const keywordsItems = [];
    keywordsArray.forEach((key) => {
      keywordsItems.push({ name: key, level: 4 });
    });
    formData[keyIndex].keywords = [...keywordsItems];
  };

  const handleSave = () => {
    const currResume = { ...resume };
    // console.log(currResume);
    dispatch(updateResume(currResume, autoSave));
  };
  //   console.log(Resume);
  // console.log("techincal sokikkll", formData);

  return (
    <section style={{ backgroundColor: "skyblue" }} className="formContainer">
      <h1 className="formTitlePrimary">technical Skills Info</h1>
      <div className="formInputContainer basicInfo">
        {formData.map((item, keyIndex) => (
          <div key={uuid()} className="">
            <h3>{item.category}</h3>
            <div className="formField" key={uuid()}>
              <label htmlFor="keywords" className="formLabel">
                Add Keywords
              </label>

              <Input
                type={"text"}
                handleChange={(e) => handleInputChange(e, keyIndex)}
                // value={"keywords"}
                name={"keywords"}
                placeholder={"comma seperated. eg: python, javascript"}
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
[
    {
      category: "Programming Languages",
      keywords: [
        { name: "JavaScript", level: 3 },
        { name: "HTML", level: 4 },
        { name: "CSS", level: 4 },
      ],
      isVisible: true,
    },
    {
      category: "Technologies",
      keywords: [
        { name: "MongoDB", level: 2 },
        { name: "Express", level: 4 },
        { name: "React", level: 4 },
        { name: "Node.js", level: 4 },
        { name: "Mocha", level: 4 },
        { name: "JWT", level: 5 },
        { name: "Chai", level: 4 },
        { name: "Redux", level: 2 },
        { name: "Git", level: 4 },
        { name: "GitHub", level: 4 },
        "Gatsby",
      ],
      isVisible: true,
    },
    {
      category: "Miscellaneous",
      keywords: [
        {
          name: "Item 1",
          level: 3,
        },
        {
          name: "Item 2",
          level: 4,
        },
        {
          name: "Item 3",
          level: 4,
        },
      ],
      isVisible: true,
      columnWidthPercent: "33.33%",
    },
  ],

*/

const mapStateToProps = (state) => ({
  resume: state.resume,
  resumeFormOpen: state.app.resumeFormOpen,
  tools: state.tools,
});

export default connect(mapStateToProps)(TechnicalSkill);
