import styled from "styled-components";

const Button = styled.button`
  background: blue;
  color: #fff;
  border: none;
  outline: none;
  padding: 6px 14px;
  border-radius: 4px;
  cursor: pointer;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.div`
  border-radius: 6px;
  width: 40%;
  height: 120px;
  align-self: center;
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Image = styled.img`
  height: 100%;
  width: 40%;
  object-fit: cover;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

const DataWrapper = styled.div`
  padding: 10px;
  width: 60%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  min-height: 45px;
  height: fit-content;
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SubText = styled.p`
  margin: 0px;
  font-size: 14px;
  color: gray;
`;

export { Button, Grid, Item, DataWrapper, Title, Image, SubText };
