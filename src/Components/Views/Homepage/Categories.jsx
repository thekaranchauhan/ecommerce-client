import React from "react";
import styledComponents from "styled-components";
import { categories } from "./data";
import CategoryItem from "./CategoryItem";

const Container = styledComponents.div`
display:flex;
padding:20px;
justify-content:space-between;

`;

export default function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
}
