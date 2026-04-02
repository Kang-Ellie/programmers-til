import React from "react";
import styled from "styled-components";
import { useCategory } from "../../hooks/useCategory";
import Button from "../common/Button";
import { useSearchParams } from "react-router-dom";

function BooksFilter() {
  const { category } = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategory = (id: number | null) => {
    console.log("클릭된 id:", id);
    const newSearchParams = new URLSearchParams(searchParams);

    if (id === null) {
      newSearchParams.delete("category_id");
    } else {
      newSearchParams.set("category_id", id.toString());
    }

    setSearchParams(newSearchParams);
  };

  const handleNews = () => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (newSearchParams.get("news")) {
      newSearchParams.delete("news");
    } else {
      newSearchParams.set("news", "true");
    }

    setSearchParams(newSearchParams);
  };

  return (
    <BooksFilterStyle>
      <div className="category">
        {category.map((item) => (
          <Button
            size="medium"
            scheme={item.isActive ? "primary" : "normal"}
            key={item.category_id}
            onClick={() => handleCategory(item.category_id)}
          >
            {item.category_name}
          </Button>
        ))}
      </div>
      <div className="new">
        <Button
          size="medium"
          scheme={searchParams.get("news") ? "primary" : "normal"}
          onClick={() => handleNews()}
        >
          신간
        </Button>
      </div>
    </BooksFilterStyle>
  );
}

const BooksFilterStyle = styled.div`
  display: flex;
  gap: 24px;

  .category {
    display: flex;
    gap: 8px;
  }
`;

export default BooksFilter;
