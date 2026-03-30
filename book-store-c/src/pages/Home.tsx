import React from "react";
import Title from "../components/common/Title";
import Button from "../components/common/Button";

function Home() {
  return (
    <>
      <Title size="medium" color="background">
        제목 테스트
      </Title>
      <Button size="large" scheme="normal">
        버튼 테스트
      </Button>
      <div>home body</div>
    </>
  );
}

export default Home;
