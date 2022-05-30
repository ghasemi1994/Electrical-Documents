import React, { useEffect, useState } from "react";
import "./folder.css";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../features/folder/folderSlice";
import { IFolder, IFolderChildren } from "./../../constants/data";
import SubFolder from "./SubFolder";
interface IFolderProperty {
  id: number;
  folderName: string;
}
export default function Folder() {
  const [folder, setFolder] = useState<IFolderProperty>();
  const [data, setData] = useState<Array<IFolder>>();
  const [sub, setSub] = useState<Array<IFolderChildren>>();
  const [showSub, setShowSub] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { value, step } = useSelector((state: any) => state.folder);

  const handleClick = (folder: IFolderProperty) => {
    setFolder(folder);
    var sub = data?.find((a) => a.id === folder.id);
    setSub(sub?.children);
    setShowSub(true);
    dispatch(increment());
    setOpen(true);
  };
  const handleBackClick = () => {
    dispatch(decrement());
    setShowSub(false);
    setData(value);
  };

  useEffect(() => {
    setData(value);
  }, [data]);

  return (
    <>
      <div className="d-flex">
        {step > 1 && (
          <a href="/#" onClick={handleBackClick}>
            <BsFillArrowLeftCircleFill size={30} />
          </a>
        )}
        <h5 className="ml-2">Mohammad's Folders</h5>
        {step > 1 && (
          <span className="text-muted ml-2">
            ({folder?.folderName}) ({sub?.length}
            {"item(s)"})
          </span>
        )}
      </div>
      <hr />
      {showSub ? (
        <SubFolder data={sub} />
      ) : (
        <div className="row">
          {data?.map((item, index) => (
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6" key={index}>
              <div className="folder-content">
                <a
                  href="/#"
                  onDoubleClick={() =>
                    handleClick({
                      id: item.id,
                      folderName: item.name,
                    })
                  }
                >
                  {folder?.id === item.id && open ? (
                    <FcOpenedFolder size={50} />
                  ) : (
                    <FcFolder size={50} />
                  )}
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
      )}
    </>
  );
}
