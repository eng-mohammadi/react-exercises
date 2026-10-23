import React, { useState } from "react";
import { getErrorMessage } from "../utils/getErrorMessage";
import {
  useGetProfessorsQuery,
  useAddProfessorMutation,
  useDeleteProfessorMutation,
} from "../redux/services/professorsApi";

const ProfessorManagement = () => {
  const { data: professors, isLoading, error } = useGetProfessorsQuery();
  const [addProfessor, { isLoading: isAddingProfessor }] =
    useAddProfessorMutation();
  const [deleteProfessor, { isLoading: isDeletingProfessor }] =
    useDeleteProfessorMutation();

  const initialState = {
    name: "",
    family: "",
    personalId: "",
    courseList: "",
  };

  const [newProfessor, setNewProfessor] = useState(initialState);

  const inputChangeHandler = (event) => {
    setNewProfessor({
      ...newProfessor,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitHandler = async (event) => {
    event.preventDefault();
    const { courseList, ...professorData } = newProfessor;
    const payload = {
      ...professorData,
      personalId: Number(professorData.personalId),
      course_list: courseList
        .split(/[,،]/)
        .map((course) => course.trim())
        .filter(Boolean),
    };
    const result = await addProfessor(payload);
    if (!result.error) {
      setNewProfessor(initialState);
    }
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (error) {
    return <h1>Error: {getErrorMessage(error)}</h1>;
  } else {
    return (
      <React.Fragment>
        <div className="professor-management">
          <table>
            <caption>مدیریت اساتید</caption>
            <thead>
              <tr>
                <th>نام</th>
                <th>نام خانوادگی</th>
                <th>شماره پرسنلی</th>
                <th>دروس</th>
                <th>حذف</th>
              </tr>
            </thead>
            <tbody>
              {professors.map((professor) => (
                <tr key={professor.id}>
                  <td>{professor.name}</td>
                  <td>{professor.family}</td>
                  <td>{professor.personalId}</td>
                  <td>
                    {Array.isArray(professor.course_list) ?
                      professor.course_list.join(" ، ")
                    : ""}
                  </td>
                  <td>
                    <i
                      className="fa fa-trash"
                      onClick={() =>
                        !isDeletingProfessor && deleteProfessor(professor.id)
                      }
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="add-professor__form">
            <fieldset>
              <legend>افزودن استاد</legend>
              <form onSubmit={(event) => handleSubmitHandler(event)}>
                <div className="form-group">
                  <label htmlFor="name">نام : </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="نام"
                    autoComplete="off"
                    required
                    value={newProfessor.name}
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="family">نام خانوادگی : </label>
                  <input
                    type="text"
                    id="family"
                    name="family"
                    placeholder="نام خانوادگی"
                    autoComplete="off"
                    required
                    value={newProfessor.family}
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="personalId">شماره پرسنلی : </label>
                  <input
                    type="number"
                    id="personalId"
                    name="personalId"
                    placeholder="شماره پرسنلی"
                    autoComplete="off"
                    required
                    value={newProfessor.personalId}
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="courseList"> لیست دروس : </label>
                  <input
                    type="text"
                    id="courseList"
                    name="courseList"
                    placeholder="دروس را با ویرگول جدا کنید"
                    autoComplete="off"
                    required
                    value={newProfessor.courseList}
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" disabled={isAddingProfessor}>
                    افزودن استاد
                  </button>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default ProfessorManagement;
