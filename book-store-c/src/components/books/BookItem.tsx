import React, { FC } from "react";
import styled from "styled-components";
import { Book } from "../../models/book.model";
import { getImgSrc } from "../../utils/image";
import { formatNumber } from "../../utils/format";
import { FaHeart } from "react-icons/fa";
import type { IconBaseProps } from "react-icons/lib/iconBase";

interface Props {
  book: Book;
}

const HeartIcon = FaHeart as FC<IconBaseProps>;

function BookItem({ book }: Props) {
  return (
    <BookItemStyle>
      <div className="img">
        <img src={getImgSrc(book.id)} alt={book.title} />
      </div>
      <div className="content">
        <h2 className="title">{book.title}</h2>
        <p className="summary">{book.summary}</p>
        <p className="author">{book.author}</p>
        <p className="price">{formatNumber(book.price)}원</p>
        <div className="likes">
          <HeartIcon />
          <span>{book.likes}</span>
        </div>
      </div>
    </BookItemStyle>
  );
}

const BookItemStyle = styled.div``;

export default BookItem;
