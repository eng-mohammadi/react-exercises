import React, { useState } from "react";
import { useGetStudentsQuery } from "../redux/services/studentsApi";
import { useGetCoursesQuery } from "../redux/services/coursesApi";
import {
  useGetSelectUnitsQuery,
  useAddSelectUnitsMutation,
  useDeleteSelectUnitsMutation,
} from "../redux/services/selectUnitsApi";
import { getErrorMessage } from "../utils/getErrorMessage";

const MAX_UNITS = 20;

const UnitSelection = () => {
  const {
    data: students = [],
    isLoading: isLoadingStudents,
    error: studentsError,
  } = useGetStudentsQuery();
  const {
    data: courses = [],
    isLoading: isLoadingCourses,
    error: coursesError,
  } = useGetCoursesQuery();
  const {
    data: allSelectUnits = [],
    isLoading: isLoadingSelectUnits,
    error: selectUnitsError,
  } = useGetSelectUnitsQuery();
  const [addSelectUnits, { isLoading: isAddingSelectUnits }] =
    useAddSelectUnitsMutation();
  const [deleteSelectUnits, { isLoading: isDeletingSelectUnits }] =
    useDeleteSelectUnitsMutation();

  const initialState = {
    name: "",
    family: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Only the units chosen by the logged-in student are shown and counted
  const selectUnits =
    selectedStudent ?
      allSelectUnits.filter((unit) => unit.studentId === selectedStudent.id)
    : [];
  const totalUnits = selectUnits.reduce(
    (acc, unit) => acc + Number(unit.numberOfUnits),
    0,
  );

  const inputChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const student = students.find(
      (item) =>
        item.name === formData.name.trim() &&
        item.family === formData.family.trim(),
    );
    if (student) {
      setSelectedStudent(student);
    } else {
      window.alert(
        "نتیجه ای یافت نشد! لطفا از قسمت مدیریت دانشجو اطلاعات جدید را وارد کنید.",
      );
    }
    setFormData(initialState);
  };

  const handleSelectUnitsSubmit = async (event, course) => {
    event.preventDefault();
    if (selectUnits.some((unit) => unit.courseId === course.courseId)) {
      window.alert("این درس قبلا انتخاب شده است.");
      return;
    }
    if (totalUnits + Number(course.numberOfUnits) > MAX_UNITS) {
      window.alert(`تعداد واحدهای انتخابی نباید بیشتر از ${MAX_UNITS} باشد.`);
      return;
    }
    // No "id" is sent: json-server generates a unique one for every selection
    await addSelectUnits({
      studentId: selectedStudent.id,
      courseId: course.courseId,
      name: course.name,
      numberOfUnits: course.numberOfUnits,
      professorName: course.professorName,
    });
  };

  const error = studentsError || coursesError || selectUnitsError;

  if (isLoadingStudents || isLoadingCourses || isLoadingSelectUnits) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h1>Error: {getErrorMessage(error)}</h1>;
  }

  return (
    <React.Fragment>
      <div className="unit-selection__form">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="form-group">
            <label htmlFor="name">نام</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              required
              value={formData.name}
              onChange={(event) => inputChangeHandler(event)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="family">نام خانوادگی</label>
            <input
              type="text"
              name="family"
              id="family"
              autoComplete="off"
              required
              value={formData.family}
              onChange={(event) => inputChangeHandler(event)}
            />
          </div>
          <div className="form-group">
            <button type="submit">ورود</button>
          </div>
        </form>
      </div>
      {selectedStudent ?
        <React.Fragment>
          <div className="unit-selection__table">
            <table>
              <thead>
                <tr>
                  <th>نام</th>
                  <th>نام خانوادگی</th>
                  <th>سن</th>
                  <th>رشته تحصیلی</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedStudent.name}</td>
                  <td>{selectedStudent.family}</td>
                  <td>{selectedStudent.age}</td>
                  <td>{selectedStudent.fieldOfStudy}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="unit-selection__table">
            <table>
              <caption>انتخاب واحد</caption>
              <thead>
                <tr>
                  <th>نام درس</th>
                  <th>تعداد واحد</th>
                  <th>استاد مربوطه</th>
                  <th>انتخاب</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.name}</td>
                    <td>{course.numberOfUnits}</td>
                    <td>{course.professorName}</td>
                    <td>
                      <form
                        onSubmit={(event) =>
                          handleSelectUnitsSubmit(event, course)
                        }
                      >
                        <button type="submit" disabled={isAddingSelectUnits}>
                          اضافه کردن
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="unit-selection__table">
            <table>
              <caption>
                دروس انتخاب شده ({totalUnits} از {MAX_UNITS} واحد)
              </caption>
              <thead>
                <tr>
                  <th>نام درس</th>
                  <th>تعداد واحد</th>
                  <th>استاد مربوطه</th>
                  <th>حذف</th>
                </tr>
              </thead>
              <tbody>
                {selectUnits.map((unit) => (
                  <tr key={unit.id}>
                    <td>{unit.name}</td>
                    <td>{unit.numberOfUnits}</td>
                    <td>{unit.professorName}</td>
                    <td>
                      <i
                        className="fa fa-trash"
                        onClick={() =>
                          !isDeletingSelectUnits && deleteSelectUnits(unit.id)
                        }
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </React.Fragment>
      : <div className="unit-selection__no-result">
          <p>لطفا اطلاعات خود را وارد کنید</p>
        </div>
      }
    </React.Fragment>
  );
};

export default UnitSelection;
