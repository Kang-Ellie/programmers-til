import React, { FC, useEffect } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { FaList, FaTh } from "react-icons/fa";
import type { IconBaseProps } from "react-icons/lib/iconBase";
import { useSearchParams } from "react-router";
import { QUERYSTRING } from "../../constants/querystring";

export const ListIcon = FaList as FC<IconBaseProps>;
export const GridIcon = FaTh as FC<IconBaseProps>;

const viewOptions = [
  {
    value: "list",
    icon: <ListIcon />,
  },
  {
    value: "grid",
    icon: <GridIcon />,
  },
];

export type ViewMode = "grid" | "list";

function BooksViewSwitcher() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSwitch = (value: ViewMode) => {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(QUERYSTRING.VIEW, value);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (!searchParams.get(QUERYSTRING.VIEW)) {
      handleSwitch("grid");
    }
  }, []);

  return (
    <BooksViewSwitcherStyle>
      {viewOptions.map((option) => (
        <Button
          key={option.value}
          size="medium"
          scheme={
            searchParams.get(QUERYSTRING.VIEW) === option.value
              ? "primary"
              : "normal"
          }
          onClick={() => handleSwitch(option.value as ViewMode)}
        >
          {option.icon}
        </Button>
      ))}
    </BooksViewSwitcherStyle>
  );
}

const BooksViewSwitcherStyle = styled.div`
  display: flex;
  gap: 8px;

  svg {
    fill: #fff;
  }
`;
export default BooksViewSwitcher;
