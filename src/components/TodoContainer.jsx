import React from "react";
import "css/Style.css";

function TodoContainer({ item, completeButton, cancelButton, removeButton }) {
  return (
    <>
      <div key={item.id} className="list-container">
        <div className="todo-container">
          <h2>{item.title}</h2>
          <div>{item.content}</div>
          <div className="button-set">
            <button
              className="todo-delete-button button"
              onClick={() => removeButton(item.id)}
            >
              삭제하기
            </button>
            {item.isDone ? (
              <button
                className="todo-complete-cancel-button button"
                onClick={() => cancelButton(item.id)}
              >
                취소
              </button>
            ) : (
              <button
                className="todo-complete-cancel-button button"
                onClick={() => completeButton(item.id)}
              >
                완료
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoContainer;
