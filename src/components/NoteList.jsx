import React from 'react';
import ArchivedNote from './ArchivedNote';
import UnarchivedNote from './UnarchivedNote';

const filterNotes = (notes, isArchived) => {
  return notes.filter((note) => note.archived === isArchived);
};

const NoteList = ({ notes, onArchiveToggle, onDelete }) => {
  const archivedNotes = filterNotes(notes, true);
  const unarchivedNotes = filterNotes(notes, false);

  return (
    <div className="mt-5">
      <div>
        <h2 className="text-xl font-semibold mb-2 px-5">Belum diarsipkan</h2>
        {unarchivedNotes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
            {unarchivedNotes.map((note) => (
              <UnarchivedNote key={note.id} {...note} onArchiveToggle={onArchiveToggle} onDelete={onDelete} />
            ))}
          </div>
        ) : (
          <p className="px-5">Catatan tidak tersedia</p>
        )}
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-semibold mb-4 px-5">Diarsipkan</h2>
        {archivedNotes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
            {archivedNotes.map((note) => (
              <ArchivedNote key={note.id} {...note} onArchiveToggle={onArchiveToggle} onDelete={onDelete} />
            ))}
          </div>
        ) : (
          <p className="px-5">Catatan tidak tersedia</p>
        )}
      </div>
    </div>
  );
};

export default NoteList;
