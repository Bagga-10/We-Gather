// NotesPage.js
import React, { useState } from 'react';

const Notespage = () => {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      setNotes([...notes, noteText]);
      setNoteText('');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Notes</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Write your note here..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddNote} style={styles.button}>Add Note</button>
      </div>
      <ul style={styles.notesList}>
        {notes.map((note, index) => (
          <li key={index} style={styles.noteItem}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
  },
  inputContainer: {
    display: 'flex',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  notesList: {
    listStyleType: 'none',
    padding: 0,
  },
  noteItem: {
    backgroundColor: '#f4f4f4',
    marginBottom: '10px',
    padding: '10px',
    borderRadius: '4px',
  },
};

export default Notespage;
