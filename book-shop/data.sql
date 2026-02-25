INSERT INTO books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("어린왕자들", "종이책", 0, "어리다..", "많이 어리다..", "김어림", 100, "목차입니다.", 20000, "2019-01-01");

INSERT INTO books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("신데렐라들", "종이책", 1, "유리구두..", "투명한 유리구두..", "김구두", 100, "목차입니다.", 20000, "2025-12-01");

INSERT INTO books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("백설공주들", "종이책", 2, "사과..", "빨간 사과..", "김사과", 100, "목차입니다.", 20000, "2026-01-15");

INSERT INTO books (title, form, isbn, summary, detail, author, pages, contents, price, pub_date)
VALUES ("흥부와 놀부들", "종이책", 3, "제비..", "까만 제비..", "김제비", 100, "목차입니다.", 20000, "2026-02-08");

SELECT * FROM Bookshop.books LEFT
JOIN category ON books.category_id = category_id;

SELECT * FROM Bookshop.books LEFT JOIN category ON books.category_id = category_id WHERE books.id=1;

// 좋아요 추가
INSERT INTO likes (user_id, liked_book_id) VALUES (1, 1);
INSERT INTO likes (user_id, liked_book_id) VALUES (1, 2);
INSERT INTO likes (user_id, liked_book_id) VALUES (1, 3);
INSERT INTO likes (user_id, liked_book_id) VALUES (4, 4);
INSERT INTO likes (user_id, liked_book_id) VALUES (2, 1);
INSERT INTO likes (user_id, liked_book_id) VALUES (2, 2);
INSERT INTO likes (user_id, liked_book_id) VALUES (2, 3);
INSERT INTO likes (user_id, liked_book_id) VALUES (2, 6);
INSERT INTO likes (user_id, liked_book_id) VALUES (4, 1);

// 좋아요 삭제
DELETE FROM likes WHERE user_id = 1 AND liked_book_id = 3;

// 테이블의 조건을 만족하는 행 갯수
SELECT count(*) FROM Bookshop.likes WHERE liked_book_id=1

// 좋아요 개수가 포함된 books 테이블 조회
SELECT *, (SELECT count(*) FROM likes WHERE books.id=liked_book_id) AS likes FROM books

// 개별 도서 조회 시, 사용자가 좋아요를 했는지 여부를 포함
SELECT * FROM books WHERE books.id=1;

SELECT EXISTS (SELECT * FROM likes WHERE user_id=1 AND liked_book_id=1);
= SELECT count(*) FROM likes WHERE user_id=1 AND liked_book_id=1

// 장바구니 담기
INSERT INTO cartItems (book_id, quantity, user_id) VALUES (1,1,1)

// 장바구니 아이템 목록 조회
SELECT cartItems.id, book_id, title, summary, quantity, price 
FROM Bookshop.cartItems LEFT JOIN books 
ON cartItems.book_id = books.id;

// 장바구니 아이템 조회
DELETE FROM cartItems WHERE id = ?;

// 장바구니에서 선택한(장바구니 도서 id) 아이템 목록 조회 (= 선택한 장바구니 상품 목록 조회)
SELECT * FROM Bookshop.cartItems WHERE user_id=1 AND id IN (1, 3)

// 주문하기
// 배송 정보 입력
INSERT INTO `Bookshop`.`delivery` (`address`, `reveiver`, `contact`) VALUES ('서울시 중구', '강영아', '010-1234-5678');
const delivery_id = SELECT max(id) FROM delivery;

// 주문 정보 입력
INSERT INTO `Bookshop`.`orders` (`book_title`, `total_quantity`, `total_price`, `user_id`, `delivery_id`) VALUES ('어린왕자들', 3, 60000, 1, delivery_id);
const order_id = SELECT max(id) FROM orders;

// 주문 상세 목록 입력
INSERT INTO `Bookshop`.`orderedBook` (`order_id`, `book_id`, `quantity`) VALUES (order_id, 1, 1);
INSERT INTO `Bookshop`.`orderedBook` (`order_id`, `book_id`, `quantity`) VALUES (order_id, 3, 2);

SELECT max(id) FROM Bookshop.orderedBook;
