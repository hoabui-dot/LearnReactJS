import React from "react";
import EduBox from "./EduBox";
import styles from "../styles/Home.module.scss";

const FolderTree = ({ tree, dataFolderTree, setState }) => {
  return (
    <>
      <div className={styles.folderTree}>
        <div className={styles.folderTree__tree}></div>
        <div className={styles.folderTree__list}>
          {dataFolderTree &&
            !!dataFolderTree &&
            dataFolderTree.map((data, index) => (
              <EduBox
                setState={setState}
                key={index}
                flip={data.flip}
                eduData={data}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default FolderTree;
