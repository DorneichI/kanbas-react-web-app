import { useState } from "react";
import "./index.css";
import "../../styles.css"
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaTimesCircle, FaEdit } from "react-icons/fa";
import { useParams } from "react-router";
import Navbar from "./Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  // const [moduleList, setModuleList] = useState<any[]>(modules);
  // // const modulesList = modules.filter((module) => module.course === courseId);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  //   _id: `M${new Date().getTime().toString()}`
  // });
  // const addModule = (module: any) => {
  //   const newModule = { ...module,
  //     _id: `M${new Date().getTime().toString()}` };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };
  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId );
  //   setModuleList(newModuleList);
  // };
  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
      <Navbar/>
      <button className="m-1 btn btn-light wd-kanbas-button-primary" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
      <button className="m-1 btn btn-light wd-kanbas-button-primary" onClick={() => dispatch(updateModule(module))}>Update</button><br/>
      <input className="m-1" value={module.name}
        onChange={
          (e) => dispatch(setModule({ ...module, name: e.target.value }))
        }
      /><br/>
      <textarea className="m-1" value={module.description}
        onChange={
          (e) => dispatch(setModule({ ...module, description: e.target.value }))
        }
      />
      <ul className="list-group wd-modules">
        {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div className="p-2">
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <button className="wd-modulesbar-button"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  <FaTimesCircle className="m-2 text-danger" />
                </button>
                <button className="wd-modulesbar-button"
                  onClick={() => dispatch(setModule(module))}>
                  <FaEdit className="m-2" />
                </button>

                <FaCheckCircle className="m-2 text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
            <ul className="list-group">
              <li className="list-group-item">
                <div className="p-2">
                <FaEllipsisV className="me-2" />
                    Lessons:
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                </div>
                  <ul className="list-group">
                    {module.lessons?.map((lesson: {_id: string; name: string; description: string; module: string;}, index: number) => (
                      <li key={index} className="list-group-item">
                        <div className="p-2">
                          <FaEllipsisV className="me-4" />
                          {lesson.name}
                          <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaEllipsisV className="ms-2" />
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
              </li>
              <li className="list-group-item">
                <div className="p-2">
                <FaEllipsisV className="me-2" />
                    Readings:
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                </div>
                  <ul className="list-group">
                    {module.readings?.map((reading: {_id: string; name: string; description: string; module: string;}, index: number) => (
                      <li key={index} className="list-group-item">
                        <div className="p-2">
                          <FaEllipsisV className="me-4" />
                          {reading.name}
                          <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaEllipsisV className="ms-2" />
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
              </li>
            </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;