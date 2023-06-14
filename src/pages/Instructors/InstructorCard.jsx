import React from 'react';

const InstructorCard = ({instructor}) => {
    return (
        <div className='class-card p-4 rounded shadow grid-item bg-white'>
            <img
        src={instructor.image}
        alt={instructor.name}
        className="mb-2 rounded p-4 h-72 w-full"
      />
      <div className="mt-5 p-4">
        <h3 className="text-xl font-bold">{instructor.name}</h3>
        <p className="text-lg font-semibold">
          Instructor: {instructor.email}
        </p>
        <p>Total Classes taken: {instructor.total_classes}</p>
        <button
          className="btn btn-info mt-2"
        >
          See Classes
        </button>
      </div>
        </div>
    );
};

export default InstructorCard;