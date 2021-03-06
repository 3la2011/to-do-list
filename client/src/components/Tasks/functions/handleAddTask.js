import { axiosConfiguration } from "../../../functions/axiosConfig";
import { store } from "../../../redux/store";
import { setTasks } from "../../../redux/tasksReducer";

export const handleAddTask = () => {
  const axiosConfig = axiosConfiguration();

  axiosConfig
    .get("/tasks/add")
    .then((res) => {
      store.dispatch(setTasks(res.data.tasks));
    })
    .catch((err) => console.error(err));
};
