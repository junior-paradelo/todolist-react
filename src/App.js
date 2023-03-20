import React from "react";
import { Counter } from "./components/Counter";
import { Search } from "./components/Search";
import { List } from "./components/List";
import { Item } from "./components/Item";
import { CreateButton } from "./components/CreateButton";

const defaultTasks = [
  { text: "Task 1", completed: true },
  { text: "Task 2", completed: true },
  { text: "Task 3", completed: false },
  { text: "Task 4", completed: false },
];

function App() {
  const [tasks, setTasks] = React.useState(defaultTasks);
  const [search, setSearch] = React.useState("");
  const completedTasks = tasks.filter((task) => !!task.completed).length;
  const totalTasks = tasks.length;

  let searchedTasks = [];
  if (searchedTasks.length >= 1) {
    searchedTasks = tasks;
  } else {
    searchedTasks = tasks.filter((task) => {
      const taskText = task.text.toLowerCase();
      const searchText = search.toLowerCase();
      return taskText.includes(searchText);
    });
  }

  return (
    <React.Fragment>
      <Counter total={totalTasks} completed={completedTasks} />
      <Search search={search} setSearch={setSearch} />
      <List>
        {searchedTasks.map((task) => (
          <Item key={task.text} text={task.text} completed={task.completed} />
        ))}
      </List>
      <CreateButton />
    </React.Fragment>
  );
}

export default App;
