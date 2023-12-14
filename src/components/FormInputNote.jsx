import React from "react";

class FormInputNote extends React.Component {
  state = {
    title: "",
    body: "",
    maxCharCount: 50,
  };

  onTitleChangeEventHandler = (event) => {
    const newTitle = event.target.value;
    const limitedTitle = newTitle.slice(0, this.state.maxCharCount);

    this.setState({
      title: limitedTitle,
    });
  };

  onBodyChangeEventHandler = (event) => {
    this.setState({
      body: event.target.value,
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.addData(this.state);
    this.setState({
      title: "",
      body: "",
    });
  };

  render() {
    const { title, body, maxCharCount } = this.state;

    return (
      <form
        onSubmit={this.onSubmitHandler}
        className="mt-4 p-5 bg-white rounded-md shadow"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 mb-2">
            Title (Max {maxCharCount} karakter):
          </label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={this.onTitleChangeEventHandler}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <span className="text-sm text-gray-500">{`${title.length}/${maxCharCount}`}</span>
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-gray-600 mb-2">
            Body:
          </label>
          <textarea
            id="body"
            placeholder="Body"
            value={body}
            onChange={this.onBodyChangeEventHandler}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            aria-label="Body"
          />
        </div>
        <button
          type="submit"
          className="bg-emerald-400 text-white px-4 py-2 rounded-md hover:bg-emerald-500 focus:outline-none focus:ring focus:border-blue-700"
        >
          Tambah
        </button>
      </form>
    );
  }
}

export default FormInputNote;
