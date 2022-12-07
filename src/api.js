import axios from "axios";

/* Return all the tasks available */
const getList = () => {
  return axios
    .get("http://localhost:3001/gettasks")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/* Return all tasks based on search text */
const seachTask = (searchText) => {
  return axios
    .post("http://localhost:3001/searchtask", { searchText })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/* Return Active Tasks count */
const getActiveTaskCount = () => {
  return axios
    .get("http://localhost:3001/activeTaskCount")
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

/* Delete a task using task id */
const deleteTask = (taskId) => {
  return axios
    .post("http://localhost:3001/deleteTask", { taskId })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getList, seachTask, getActiveTaskCount, deleteTask };
