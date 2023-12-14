import React from 'react';

const ButtonDelete = ({ id, onDelete }) => {
  return (
    <button
      onClick={() => onDelete(id)}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Delete
    </button>
  );
};

export default ButtonDelete;
