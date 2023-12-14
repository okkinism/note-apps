import React, { Component } from "react";
import Navbar from "../components/Navbar";
import NoteList from "../components/NoteList";
import FormInputNote from "../components/FormInputNote";
import { getNotes } from "../utils/data";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [...getNotes()],
      searchQuery: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleArchiveToggle = this.handleArchiveToggle.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
  }

  handleSearch(event) {
    this.setState({ searchQuery: event.target.value });
  }

  handleAddNote = (newNote) => {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title: newNote.title,
            body: newNote.body,
            createdAt: new Date().toDateString(),
            archived: false,
          },
        ],
      };
    });
  };

  handleArchiveToggle(noteId) {
    const updatedNotes = this.state.notes.map((note) =>
      note.id === noteId ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes: updatedNotes });
  }

  handleDeleteNote(noteId) {
    const updatedNotes = this.state.notes.filter((note) => note.id !== noteId);
    this.setState({ notes: updatedNotes });
  }

  render() {
    const { notes, searchQuery } = this.state;
    const filteredNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.body.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div className="App">
        <Navbar onSearch={this.handleSearch} />
        <div className="container mx-auto mt-8">
          <FormInputNote addData={this.handleAddNote} />
          <NoteList
            notes={filteredNotes}
            onArchiveToggle={this.handleArchiveToggle}
            onDelete={this.handleDeleteNote}
          />
        </div>
      </div>
    );
  }
}

export default App;
