import React from "react";
import { useEffect, useState } from "react";
// import axios from "axios";
import { BookCard } from "./BookCard";
import styled from "styled-components";

//add required style here
export const Grid = styled.div`
  display: grid;
  justify-content: space-around;
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // make a GET request to http://localhost:8080/books to get all the books data
    const getData = async () => {
      let res = await fetch(`http://localhost:8080/books`);
      let data = await res.json();
      setData([...data]);
    };
    getData();
  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}

        {!!data &&
          data.map(() => {
            return <BookCard key={data.id} item={data} />;
          })}
      </Grid>
    </>
  );
};
export default Books;
