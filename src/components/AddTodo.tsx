import React from "react";

interface Props {
    handleSubmit: (value: string) => void
}

const AddTodo:React.FC<Props> = ({handleSubmit}) => {
  const [inputValue, setInputValue] = React.useState('');
  return (
    <div className="AddTodo">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <form className="cards" onSubmit={(e) => {
                e.preventDefault()
                handleSubmit(inputValue)
                setInputValue('')
            }}>
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                type="text"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
