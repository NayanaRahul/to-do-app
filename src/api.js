import axios from "axios";

/* Return all the tasks available */
const getList = async () => {
  console.log("GET LIST");
  try {
    const response = await axios.get("http://localhost:3001/gettasks");
    return response.data;
  } catch (err) {
    console.log(err);
  }
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
const deleteTask = async (taskId) => {
  try {
    const response = await axios.post("http://localhost:3001/deleteTask", {
      taskId,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

/* Update a task */
const updateTask = async (task, taskId) => {
  try {
    const response = await axios.post("http://localhost:3001/updateTask", {
      task,
      taskId,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export { getList, seachTask, getActiveTaskCount, deleteTask, updateTask };
