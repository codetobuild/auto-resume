import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Label, Icon, Button } from "semantic-ui-react";
import uuid from "uuid/v4";
import { changeTemplate } from "../../actions/app.actions";
import { template } from "../../constants/common";

const TemplateSelector = (props) => {
  const { dispatch, tools } = props;
  const { template: selectedTemplate } = tools;

  const handleTemplateChange = (e) => {
    const { name, value } = e.target;
    // console.log({ name, value });
    dispatch(changeTemplate(value));
  };

  return (
    <div className="json-resume-tool font-selector">
      <Label size="big" basic>
        <Icon name="font" />
        Templates
      </Label>
      <Button
        size="large"
        fluid
        style={{
          display: "block",
          backgroundColor: "white",
          color: "black",
        }}>
        <select
          className="options-selector"
          name="template"
          onChange={handleTemplateChange}
          value={selectedTemplate}>
          {template.map((temp) => (
            <option value={temp.value} key={uuid()}>
              {temp.label}
            </option>
          ))}
        </select>
      </Button>
    </div>
  );
};

TemplateSelector.defaultProps = {
  dispatch: () => {},
  // selectedTemplate: "",
};

TemplateSelector.propTypes = {
  dispatch: PropTypes.func,
  // selectedTemplate: PropTypes.string,
};

const mapStateToProps = (state) => ({
  tools: state.tools,
});

export default connect(mapStateToProps)(TemplateSelector);
