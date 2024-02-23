import { useState } from "react";
import "./index.css";
import "../../styles.css"
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import Navbar from "./Navbar";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <Navbar/>
      <ul className="list-group wd-modules">
        {modulesList.map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div className="p-2">
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
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
                    {module.lessons?.map((lesson, index) => (
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
                    {module.readings?.map((reading, index) => (
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