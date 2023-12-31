//" use client ";

import React from "react";

const Book = ({ imgSrc, title, author, yearLastRead, rating, review }) => {
  //const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <img
        src={imgSrc}
        alt={title}
        // onMouseEnter={() => setShowModal(true)}
        //onMouseLeave={() => setShowModal(false)}
        style={{ width: "200px" }}
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "220px", // Adjusts modal position
          backgroundColor: "white",
          padding: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3>{title}</h3>
        <p>
          <strong>Author:</strong> {author}
        </p>
        <p>
          <strong>Year Last Read:</strong> {yearLastRead}
        </p>
        <p>
          <strong>Rating:</strong> {rating}
        </p>
        <p>
          <strong>Review:</strong> {review}
        </p>
      </div>
    </div>
  );
};

export default Book;
