export interface IFolder {
  id: number;
  name: string;
  createdBy: string;
  createdDate: string;
  children: Array<IFolderChildren>;
}

export interface IFolderChildren {
  id: number;
  parentId: number;
  name: string;
  createdDate: string;
  createdBy: string;
}

export const Data: Array<IFolder> = [
  {
    id: 1,
    name: "Folder1",
    createdBy: "m.ghasemi",
    createdDate: "1401/03/05",
    children: [
      {
        id: 1,
        parentId: 1,
        name: "SubFolder1-1",
        createdBy: "m.ghasemi",
        createdDate: "1401/03/09",
      },
    ],
  },
  {
    id: 2,
    name: "Folder2",
    createdBy: "m.ghasemi",
    createdDate: "1401/03/06",
    children: [
      {
        id: 1,
        parentId: 2,
        name: "SubFolder2-1",
        createdBy: "m.ghasemi",
        createdDate: "1401/03/12",
      },
      {
        id: 2,
        parentId: 2,
        name: "SubFolder2-2",
        createdBy: "m.ghasemi",
        createdDate: "1401/03/20",
      },
      {
        id: 3,
        parentId: 2,
        name: "SubFolder2-3",
        createdBy: "m.ghasemi",
        createdDate: "1401/03/20",
      },
      {
        id: 4,
        parentId: 2,
        name: "SubFolder2-4",
        createdBy: "m.ghasemi",
        createdDate: "1401/03/20",
      },
      {
        id: 5,
        parentId: 2,
        name: "SubFolder2-5",
        createdBy: "m.ghasemi",
        createdDate: "1401/03/20",
      },
      {
        id: 6,
        parentId: 2,
        name: "SubFolder2-6",
        createdBy: "m.ghasemi",
        createdDate: "1401/03/20",
      },
      {
        id: 7,
        parentId: 2,
        name: "SubFolder2-7",
        createdBy: "m.ghasemi",
        createdDate: "1401/03/20",
      },
    ],
  },
];
