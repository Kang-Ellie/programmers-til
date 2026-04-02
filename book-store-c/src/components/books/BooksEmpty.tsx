import React from "react";
import { FaSmileWink } from "react-icons/fa";
import styled from "styled-components";
import Title from "../common/Title";
import { Link } from "react-router-dom";
import type { FC } from "react";
import type { IconBaseProps } from "react-icons/lib/iconBase";

const SmileWinkIcon = FaSmileWink as FC<IconBaseProps>;

function BooksEmpty() {
  return (
    <BooksEmptyStyle>
      <div className="icon">
        <SmileWinkIcon />
      </div>
      <Title size="large" color="secondary">
        검색 결과가 없습니다.
      </Title>
      <p>
        <Link to="/books">전체 검색 결과로 이동</Link>
      </p>
    </BooksEmptyStyle>
  );
}

const BooksEmptyStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 120px 0;

  .icon {
    svg {
      font-size: 4rem;
      fill: #ccc;
    }
  }
`;

export default BooksEmpty;
