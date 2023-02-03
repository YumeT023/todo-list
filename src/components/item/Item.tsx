import { TodoItem } from "../../models/Todo.model";
import "./Item.css";

export type ItemProps = {
  item: TodoItem;
  onChange?(): void;
};

export const Item = ({ item, onChange = () => null }: ItemProps) => {
  const _getStatusClass = () =>
    `item--${item.isComplete ? "done" : "unfinished"}`;

  return (
    <div
      className={`item ${_getStatusClass()}`}
      data-testid={_getStatusClass()}
    >
      <div className="item__content">{item.content}</div>
      <div className="item__action">
        {!item.isComplete && (
          <input type="checkbox" name="item-status" onChange={onChange} />
        )}
      </div>
    </div>
  );
};
