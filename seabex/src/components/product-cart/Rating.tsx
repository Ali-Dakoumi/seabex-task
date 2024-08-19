import React from "react";

interface RatingProps {
  rating: number;
  maxStars?: number;
}

const Rating: React.FC<RatingProps> = ({ rating, maxStars = 5 }) => {
  return (
    <div className="flex">
      {[...Array(maxStars)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-gold" : "text-grayStar"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927a.748.748 0 011.902 0l1.17 3.656a.75.75 0 00.711.518h3.918a.75.75 0 01.442 1.343l-3.174 2.31a.75.75 0 00-.272.833l1.17 3.656a.75.75 0 01-1.156.833L10 13.347a.75.75 0 00-.878 0l-3.174 2.31a.75.75 0 01-1.156-.833l1.17-3.656a.75.75 0 00-.272-.833L2.486 8.444a.75.75 0 01.442-1.343h3.918a.75.75 0 00.711-.518l1.17-3.656z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
