import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateResume } from "../../actions/app.actions";
import Button from "./Buttons/Button";

const BasicInfo = (props) => {
  const { dispatch, resume, tools } = props;
  const { autoSave } = tools;
  const [formData, setFormData] = useState(resume.header || {});

  const handleBasicInfoInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    const currResume = { ...resume };
    currResume.header = { ...formData };
    // console.log(currResume);
    dispatch(updateResume(currResume, autoSave));
  };
  const {
    darkMode,
    showAddress,
    showEmail,
    showGithub,
    showIcon,
    showLinkedIn,
    showPhone,
    showWebsite,
  } = tools;

  return (
    <section style={{}} className="formContainer">
      <h1 className="formTitlePrimary">Basic Personal Info</h1>
      <div className="formInputContainer basicInfo">
        <div className="formField">
          <label htmlFor="name" className="formLabel">
            Name
          </label>
          <input
            className="formInput"
            type="text"
            id="name"
            name="name"
            onChange={handleBasicInfoInputChange}
            value={formData.name}
            placeholder="name"
          />
        </div>
        {showEmail && (
          <div className="formField">
            <label htmlFor="email" className="formLabel">
              Email
            </label>
            <input
              className="formInput"
              type="text"
              id="email"
              name="email"
              onChange={handleBasicInfoInputChange}
              value={formData.email}
              placeholder="email"
            />
          </div>
        )}
        {showAddress && (
          <div className="formField">
            <label htmlFor="address" className="formLabel">
              Address
            </label>
            <input
              className="formInput"
              type="text"
              id="address"
              name="address"
              onChange={handleBasicInfoInputChange}
              value={formData.address}
              placeholder="address"
            />
          </div>
        )}
        <div className="formField">
          <label htmlFor="city" className="formLabel">
            City
          </label>
          <input
            className="formInput"
            type="text"
            id="city"
            name="city"
            onChange={handleBasicInfoInputChange}
            value={formData.city}
            placeholder="city"
          />
        </div>
        <div className="formField">
          <label htmlFor="country" className="formLabel">
            Country
          </label>
          <input
            className="formInput"
            type="text"
            id="country"
            name="country"
            onChange={handleBasicInfoInputChange}
            value={formData.country}
            placeholder="country"
          />
        </div>

        {showLinkedIn && (
          <div className="formField">
            <label htmlFor="linkedin" className="formLabel">
              Linkedin
            </label>
            <input
              className="formInput"
              type="text"
              id="linkedin"
              name="linkedin"
              onChange={handleBasicInfoInputChange}
              value={formData.linkedin}
              placeholder="linkedin"
            />
          </div>
        )}
        {showWebsite && (
          <div className="formField">
            <label htmlFor="website" className="formLabel">
              Website
            </label>
            <input
              className="formInput"
              type="text"
              id="website"
              name="website"
              onChange={handleBasicInfoInputChange}
              value={formData.website}
              placeholder="website"
            />
          </div>
        )}
        {showPhone && (
          <div className="formField">
            <label htmlFor="phone" className="formLabel">
              Phone
            </label>
            <input
              className="formInput"
              type="text"
              id="phone"
              name="phone"
              onChange={handleBasicInfoInputChange}
              value={formData.phone}
              placeholder="phone"
            />
          </div>
        )}
      </div>
      <Button className="saveBtn" handleClick={handleSave} btnText={"Update"} />
    </section>
  );
};

const mapStateToProps = (state) => ({
  resume: state.resume,
  resumeFormOpen: state.app.resumeFormOpen,
  tools: state.tools,
});

export default connect(mapStateToProps)(BasicInfo);
