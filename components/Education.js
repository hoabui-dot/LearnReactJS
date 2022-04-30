import React, { useState } from "react";
import TitleSection from "../../TitleSection/TitleSection";
import { educationData } from "../../../../../utils/MockData";
import IconEdu from "../assets/images/book.png";
import FolderTree from "../FolderTree";
import MoreInfo from "./MoreInfo/MoreInfo";
import "./Education.scss";

const Education = () => {
  const [state, setState] = useState(false);
  return (
    <section id='education' className='education'>
      <div className='container'>
        <TitleSection title='education' urlIcon={IconEdu} />
        <FolderTree
          setState={setState}
          dataFolderTree={educationData}
          tree='edu'
        />
        {/* <MoreInfo state={state} setState={setState} /> */}
      </div>
    </section>
  );
};

export default Education;
