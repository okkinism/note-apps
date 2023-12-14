import React from 'react';
import ButtonDelete from './ButtonDelete';
import { formatDate } from '../utils/data';

const UnarchivedNote = ({ id, title, createdAt, body, onArchiveToggle, onDelete }) => {
  const noteProps = { id, title, createdAt, body };

  return (
    <div className="bg-white p-4 rounded-md shadow-lg">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-400 mt-2">{formatDate(createdAt)}</p>
      <p className="text-gray-600">{body}</p>
      <div className="flex mt-2">
        <button
          onClick={() => onArchiveToggle(id)}
          className="px-4 py-2 rounded-md font-bold bg-blue-400 text-white mr-2"
        >
          Archive
        </button>
        <ButtonDelete {...noteProps} onDelete={onDelete} />
      </div>
    </div>
  );
};

export default UnarchivedNote;
