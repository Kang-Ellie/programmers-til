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

INSERT INTO likes (user_id, liked_book_id) VALUES (1, 1);
INSERT INTO likes (user_id, liked_book_id) VALUES (1, 2);
INSERT INTO likes (user_id, liked_book_id) VALUES (1, 3);
INSERT INTO likes (user_id, liked_book_id) VALUES (4, 4);
INSERT INTO likes (user_id, liked_book_id) VALUES (2, 1);
INSERT INTO likes (user_id, liked_book_id) VALUES (2, 2);
INSERT INTO likes (user_id, liked_book_id) VALUES (2, 3);
INSERT INTO likes (user_id, liked_book_id) VALUES (2, 6);
INSERT INTO likes (user_id, liked_book_id) VALUES (4, 1);


DELETE FROM likes WHERE user_id = 1 AND liked_book_id = 3;

// 테이블의 조건을 만족하는 행 갯수
SELECT count(*) FROM Bookshop.likes WHERE liked_book_id=1

// 좋아요 개수가 포함된 books 테이블 조회
SELECT *, (SELECT count(*) FROM likes WHERE books.id=liked_book_id) AS likes FROM books

// 개별 도서 조회 시, 사용자가 좋아요를 했는지 여부를 포함
SELECT * FROM books WHERE books.id=1;

SELECT EXISTS (SELECT * FROM likes WHERE user_id=1 AND liked_book_id=1);
= SELECT count(*) FROM likes WHERE user_id=1 AND liked_book_id=1