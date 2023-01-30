export type TodoItem = {
  idx: number;
  content: string;
  isComplete: boolean;
};

export type TodoList = Array<TodoItem>;
