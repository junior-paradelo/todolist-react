import React from "react";
import { Counter } from "./components/Counter";
import { Search } from "./components/Search";
import { List } from "./components/List";
import { Item } from "./components/Item";
import { CreateButton } from "./components/CreateButton";

const tasks = [
  { text: "Task 1", completed: false },
  { text: "Task 2", completed: true },
  { text: "Task 3", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <Counter />
      <Search />
      <List>
        {tasks.map((task) => (
          <Item key={task.text} text={task.text} />
        ))}
      </List>
      <CreateButton />
    </React.Fragment>
  );
}

export default App;
