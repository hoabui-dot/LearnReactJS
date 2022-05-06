import React from "react";
import EduBox from "./EduBox/EduBox";
import styles from "./FolderTree.module.scss";

const FolderTree = ({ tree, dataFolderTree, setState }) => {
  return (
    <>
      <div className={styles.folderTree}>
        <div
          className={`${
            tree === "exp" ? styles.folderTree__exp : styles.folderTree__edu
          }`}
        ></div>
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
