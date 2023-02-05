import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { TodoList } from "./models/Todo.model";
import { Container, ListItem, TextInput } from "./components";
import { mapToProp } from "./utils/map-to-prop";
import "./App.css";

const App = () => {
  const [state, setState] = useState<TodoList>([]);
  const [inputVal, setInputVal] = useState("");
  const [lastIdx, setLastIdx] = useState(0);

  useEffect(() => console.log(lastIdx), [lastIdx]);

  useEffect(() => {
    const _performLastIndexFind = () => {
      const indexes = mapToProp(state, "idx");
      const last = Math.max(...indexes, lastIdx);
      setLastIdx(last);
    };

    _performLastIndexFind();
  }, []);

  const handleCheck = (idx: number) => {
    const _state = state.slice();
    const _idx = state.findIndex((item) => item.idx === idx);

    _state[_idx] = { ..._state[_idx], isComplete: true };

    setState(_state);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputVal(value);
  };

  const _resetInputValue = () => setInputVal("");

  const _createTodo = (content: string) => {
    setLastIdx((prevLast) => prevLast + 1);

    return {
      content,
      idx: lastIdx,
      isComplete: false,
    };
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const _todo = _createTodo(inputVal);

    setState((prevState) => prevState.concat(_todo));

    _resetInputValue();
  };

  return (
    <Container className="container container--flex-and-center-all">
      <Container className="container__box rounded--box">
        <header className="container__header container--flex-and-center-y">
          <h2 className="container__title">Todolist</h2>
        </header>

        <main className="container__main">
          <section className="container__section">
            <form
              className="container__form container--flex-and-center-all"
              spellCheck={false}
              onSubmit={handleSubmit}
            >
              <TextInput
                placeholder="enter a todo"
                name="create-todo"
                value={inputVal}
                onChange={handleChange}
              />
            </form>

            <ListItem
              items={state}
              handleCheck={handleCheck}
              whoseComplete={false}
            />
          </section>

          <section className="container__section">
            <ListItem
              items={state}
              handleCheck={handleCheck}
              whoseComplete
              className="list-item--full"
            />
          </section>
        </main>
      </Container>
    </Container>
  );
};

export default App;
