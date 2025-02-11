import React, { useState } from "react";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating > 0) {
      onRatingSubmit(productId, rating);
      setRating(0);
    }
  };

  return (
    <div style={styles.container}>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              fontSize: "24px",
              cursor: "pointer",
              color: star <= (hoveredRating || rating) ? "gold" : "gray",
            }}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>
      <button style={styles.button} onClick={handleSubmit} disabled={rating === 0}>
        Submit Rating
      </button>
    </div>
  );
};

const styles = {
  container: { marginTop: "10px" },
  button: {
    marginTop: "10px",
    padding: "8px 15px",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "14px",
  },
};

export default RatingWidget;
