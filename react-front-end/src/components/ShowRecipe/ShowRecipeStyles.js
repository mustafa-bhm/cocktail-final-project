import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  height: 100vh;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TopLeft = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Bungee&family=Lobster&family=Source+Sans+Pro:ital,wght@0,600;1,300&display=swap");
  display: grid;
  align-items: center;
  flex: 50%;
  padding-left: 30px;
  padding-right: 30px;
  h1 {
    padding: 20px;
    font-size: 100px;
    font-family: "Lobster", cursive;
  }
  p {
    font-size: 20px;
    padding-bottom: 30px;
  }
  .fa-icon-heart {
    padding-right: 20px;
  }
  .fa-icon-heart:hover {
    color: red;
    cursor: pointer;
  }
  .fa-icon-share:hover {
    color: grey;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 70px;
    }
  }
`;
export const TopRight = styled.div`
  flex: 50%;
  img {
    width: 80%;
    border: 2px solid black;
    border-radius: 1rem;
    margin-top: 3rem;
    margin-right: rem;
  }
`;
export const BottomLeft = styled.div`
  padding: 50px 30px 70px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    text-align: left;
  }

  @media only screen and (max-width: 600px) {
    padding: 50px 30px 0px 30px;
  }
`;
export const BottomRight = styled.div`
  padding: 50px 30px 70px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    padding: 30px 30px 40px;
  }
`;
export const Video = styled.div`
  height: 50rem;
  width: 200%;
  margin-bottom: 13rem;
  grid-column-start: 1;
  grid-column-end: 2;

  @media only screen and (max-width: 600px) {
    height: 100rem;
    width: 100%;
    margin-bottom: 30rem;
    padding-bottom: 15rem;
  }

`;
export const Iframe = styled.iframe`
  width: 70%;
  height: 70%;

  @media only screen and (max-width: 600px) {
    width: 70%;
    height: 150%;
  }
`;



