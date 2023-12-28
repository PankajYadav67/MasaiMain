import React from "react";
import { Link } from "react-router-dom";
import styled  from "styled-components";

// Flex Styling Done Here(Flex Component)
export const Flex = styled.div`
 display  : flex;
 justify-content : space-evenly;

`;

export const BookCard = (props) => {
  const { id, title, isbn, pageCount, thumbnailUrl } = props;
  return (
    <>
    <Link to = {`/books/${id}`}>
      <Flex >
        <img src={thumbnailUrl} alt={title} height = "200px" width={"200px"} />
        <h3>{title}</h3>
        <h4>{isbn}</h4>
        <h5>{pageCount}</h5>
      </Flex>
    </Link>
    </>
  );
};
