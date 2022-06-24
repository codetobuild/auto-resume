import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Label, Icon, Button } from "semantic-ui-react";
import { toggleResumeForm } from "../../../actions/app.actions";

const ResumeFormButton = ({ dispatch, resume }) => {
  const handleButtonClick = () => {
    // console.log("form buton clicked");
    // console.log(resume);
    dispatch(toggleResumeForm());
  };

  return (
    <div className="json-resume-tool">
      <Label size="big" basic>
        <Icon name="edit" />
        Resume Form
      </Label>
      <Button
        content="Fillup Resume Form"
        size="large"
        fluid
        onClick={handleButtonClick}
        style={{
          display: "block",
          backgroundColor: "#3bceac",
        }}
      />
    </div>
  );
};

ResumeFormButton.defaultProps = {
  dispatch: () => {},
  resume: null,
};

ResumeFormButton.propTypes = {
  dispatch: PropTypes.func,
  resume: PropTypes.object,
};

const mapStateToProps = (state) => ({
  resume: state.resume,
});

export default connect(mapStateToProps)(ResumeFormButton);
