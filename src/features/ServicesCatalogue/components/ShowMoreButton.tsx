import React from 'react'

interface ShowMoreButtonProps {
    onClick: () => void;
  }
  
  export const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ onClick }) => (
    <div className="flex justify-center mt-4">
        <button
        onClick={onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
        Show More
        </button>
    </div>
  );

export default ShowMoreButton