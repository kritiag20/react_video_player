import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
`;
const LayoutVideo = styled.div`
  height: 100%;
  width: 70%;
  position: relative;
  padding: 20px 0 20px 20px;
`;

const LayoutList = styled.div`
  height: 100%;
  width: 30%;
  position: relative;
`;

const ListWrap = styled.div`
  height: 700px;
  overflow-y: scroll;
  padding: 13px 0;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #b6b6b6;
    border-radius: 20px;
  }
`;

const Item = styled.div`
  border-radius: 7px;
  width: 90%;
  background: #fff;
  height: 120px;
  align-self: center;
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
`;

const DataWrapper = styled.div`
  padding: 10px;
  width: ${(props) => (props.width ? "60%" : "100%")};
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Avatar = styled.div`
  height: 38px;
  width: 38px;
  border-radius: 50%;
  border: 1px solid #e7e7e7;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export {
  Avatar,
  DataWrapper,
  Item,
  LayoutList,
  LayoutVideo,
  ListWrap,
  Wrapper,
};
