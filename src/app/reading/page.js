" use client ";

import React from "react";
import Navbar from "@/components/Navbar";
import Book from "@/app/reading/Book";
import { favBooks } from "./bookData";

export default function readingPage() {
  return (
    <>
      <Navbar />
      <div style={styles.pageContainer}>
        <h1 style={styles.centeredTitle}>some of my favorite books</h1>
        <div style={styles.cardsContainer}>
          {favBooks.map((book, index) => (
            <Book
              key={index}
              imgSrc={book.imgSrc}
              title={book.title}
              author={book.author}
              yearLastRead={book.yearLastRead}
              rating={book.rating}
              review={book.review}
            />
          ))}
        </div>
      </div>
    </>
  );
}

const styles = {
  pageContainer: {
    padding: "20px", // Adds some padding to the overall page
  },
  centeredTitle: {
    textAlign: "center",
    marginBottom: "20px", // Adds some space below the title
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap", // Allow items to wrap to the next row
    gap: "20px", // Adds space between each card
    justifyContent: "center", // Center items horizontally
    alignItems: "center", // Center items vertically
  },
};
