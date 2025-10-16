import React, { useState } from "react";
import { Star } from "lucide-react";

const RatingStars = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => {
        const current = index + 1;
        return (
          <button
            key={index}
            type="button"
            onClick={() => setRating(current)}
            onMouseEnter={() => setHover(current)}
            onMouseLeave={() => setHover(0)}
          >
            <Star
              size={22}
              fill={current <= (hover || rating) ? "#facc15" : "none"}
              stroke="#facc15"
            />
          </button>
        );
      })}
    </div>
  );
};

export default RatingStars;
