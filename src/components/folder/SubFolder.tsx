import React, { useState, useEffect } from "react";
import { IFolder, IFolderChildren } from "../../constants/data";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import "./folder.css";

interface props {
  data: Array<IFolderChildren> | null | undefined;
}
export default function SubFolder(props: props) {
  useEffect(() => {}, [props]);
  return (
    <>
      <div className="row">
        {props.data?.map((item, index) => (
          <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6" key={index}>
            <div className="folder-content">
              <a href="/#">
                <FcFolder size={50} />
              </a>
              <span className="text-muted">name: {item.name}</span>
              <span className="date text-muted">
                created date: {item.createdDate}
              </span>
              <span className="date text-muted">
                created by: {item.createdBy}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
