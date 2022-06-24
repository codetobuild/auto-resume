import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";

import { connect } from "react-redux";
import { Label, Icon, Button } from "semantic-ui-react";
import { toggleResumeForm } from "../../actions/app.actions";
import { SidebarCloseButton } from "../Navigation";

import { Sidebar, Segment } from "semantic-ui-react";
import BasicInfo from "./BasicInfo";
import Education from "./Education";
// others
import "brace/mode/json";
import "brace/theme/tomorrow_night_bright";
import "brace/theme/tomorrow";
import "brace/ext/language_tools";

import "../../styles/resumeForm.css";
import Certification from "./Certification";
import TechnicalSkill from "./TechnicalSkill";
import Experience from "./Experience";
import Project from "./Project";

const HEADER = "header";

const ResumeForm = ({ dispatch, resume, resumeFormOpen, tools }) => {
  const [resumeData, setResumeData] = useState(resume);
  useEffect(() => {
    // console.log("resumeData", resume);
  }, []);

  const {
    darkMode,
    showAddress,
    showCertification,
    showEducation,
    showEmail,
    showExperience,
    showGithub,
    showIcon,
    showLinkedIn,
    showPhone,
    showProjects,
    showSkillLevel,
    showTechSkills,
    showWebsite,
  } = tools;

  const { header, education } = resumeData;

  const handleSave = (event) => {
    event.preventDefault();
    // console.log(resumeData);
  };

  useEffect(() => {
    // console.log(resumeData.header);
  }, [resumeData]);

  return (
    <Sidebar
      animation="scale down"
      visible={resumeFormOpen}
      direction="right"
      width="very wide"
      style={{
        width: "100vw",
        maxWidth: "100vw",
        maxHeight: "100%",
        overflowX: "hidden",
        backgroundColor: darkMode ? "#2d2d2d" : "#fff",
      }}>
      <SidebarCloseButton
        title="Resume Form"
        titleIcon="edit"
        closeToolbar={() => dispatch(toggleResumeForm())}
        toolbarOpen={resumeFormOpen}
        backgroundColor={darkMode ? "#2d2d2d" : "#fff"}
      />
      <div
        style={{
          // paddingTop: 10,
          paddingLeft: 20,

          // paddingRight: 20,
          // paddingBottom: 20,
          // height: "92%",
          overflowX: "hidden",
        }}>
        <div>
          <BasicInfo />
          {showEducation && <Education />}
          {showCertification && <Certification />}
          {showTechSkills && <TechnicalSkill />}
          {showExperience && <Experience />}
          {showProjects && <Project />}
        </div>
      </div>
    </Sidebar>
  );
};

/*
 * address: "123 Main Street"
city: "City"
country: "USA"
email: "email@domain.com"
github: "https://github.com/xxxxxxx"
linkedin: "https://linkedin.com/in/xxxxxx"
name: "Your Name"
phone: "123-456-7890"
state: "CA"
website: "https://website.com"
zip: "00000"
 * 
 */

ResumeForm.defaultProps = {
  dispatch: () => {},
  resume: null,
};

ResumeForm.propTypes = {
  dispatch: PropTypes.func,
  resume: PropTypes.object,
};

const mapStateToProps = (state) => ({
  resume: state.resume,
  resumeFormOpen: state.app.resumeFormOpen,
  tools: state.tools,
});

export default connect(mapStateToProps)(ResumeForm);
