// import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

// style for Flex
const Flex = styled.div`
display: flex;
justify-content : space-between;

`;

// add style for button
export const Button = styled.button`
broder: 1px soild black
`;
export const SingleBook = () => {
  const [data, setData] = useState({});

  const params = useParams();
  let { id } = params;
  console.log(params);

  useEffect( () => {
    // make a GET request to http://localhost:8080/books/${id}`
    let getData=async ()=> {
      let res = await fetch(`http://localhost:8080/books/${id}`)
      let data = res.json();
      setData({...data});

    };
    
    getData()
    
    // use useParams to get the id
  }, [id]);

  return (
    <>
      {/* added basic data you can add more and make a good UI around it */}
      {!!data && (
        <>
          <Flex>
            <img
              data-testid="book-image-url"
              src={data.thumbnailUrl}
              alt={data.title}
            />
            <div>
              <h2 data-testid="book-title">{data.title}</h2>
              <h3 data-testid="book-isbn">{data.isbn}</h3>
              <p data-testid="book-longdesc">{data.longDescription}</p>
            </div>
          </Flex>
          <Link to={`/books/${data.id}/edit`}>
            <Button>Edit</Button>
          </Link>
        </>
      )}
    </>
  );
};
