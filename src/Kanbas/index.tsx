import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import SmallScreenNavigation from "./SmallScreenNavigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState } from "react";
import { coursesDataBase } from "./Database";

import store from "./store";
import { Provider } from "react-redux";


function Kanbas() {
  const [courses, setCourses] = useState(coursesDataBase);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number", description: "This is a new Course",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "honey_mustard.jpeg"
  });
  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Provider store={store}>
      <SmallScreenNavigation />
      <div className="d-flex">
        <div className="">
          <KanbasNavigation />
        </div>
        <div style={{ flexGrow: 1 }}>
          <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route path="Account" element={<h1>Account</h1>} />
              <Route path="Dashboard" element={<Dashboard
                                                courses={courses}
                                                course={course}
                                                setCourse={setCourse}
                                                addNewCourse={addNewCourse}
                                                deleteCourse={deleteCourse}
                                                updateCourse={updateCourse}/>
                                              } />
              <Route path="Courses/:courseId/*" element={<Courses 
                                                courses={courses}/>
                                              } />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}


export default Kanbas;