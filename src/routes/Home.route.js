import React from "react";
import {
  CodeEditor,
  TopNavigation,
  Toolbar,
  MoreVisibilityModal,
} from "../components";
import ResumeForm from "../components/Form/ResumeForm";
import Resume from "../components/Resume/index";
import ResumeTemplate from "../components/Template/ResumeTemplate";

const Home = () => (
  <>
    <TopNavigation />
    {/* <Resume /> */}
    <ResumeTemplate />
    <Toolbar />
    <ResumeForm />
    <CodeEditor />
    <MoreVisibilityModal />
  </>
);

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
