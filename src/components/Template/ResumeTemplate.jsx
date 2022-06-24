import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import BasicTemplate from "./BasicTemplate";
import MoodyTemplate from "./MoodyTemplate";

const ResumeTemplate = (props) => {
  const { currentTemplate } = props;

  return (
    <>
      <MoodyTemplate />
    </>
  );
};

const mapStateToProps = (state) => ({
  currentTemplate: state.tools.template,
});

export default connect(mapStateToProps)(ResumeTemplate);
