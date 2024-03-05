import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Logo = styled.p`
  margin: 0;
  font-size: 27px;
  font-weight: 900;
  font-style: italic;
  font-family: sans-serif;
  color: #12dfce;
`;

const VideoHeading = styled.h3`
  padding: 22px;
  margin: 0;
  font-size: 22px;
  padding-bottom: 10px;
`;

const SubHeading = styled.p`
  margin: 0;
  font-size: 16px;
  padding-top: 6px;
  color: ${(props) => (props.color ? props.color : "#353535")};
`;

const Image = styled.img`
  height: 100%;
  width: 40%;
  object-fit: cover;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
`;
const Trim = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled(Trim)`
  font-size: 20px;
  font-weight: 600;
  -webkit-line-clamp: 1;
  margin: 0;
  width: 98%;
  line-height: 27px;
`;

const ItemTitle = styled(Trim)`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  min-height: 45px;
  height: fit-content;
  text-align: left;
  -webkit-line-clamp: 2;
`;

const SubText = styled.p`
  margin: 0px;
  font-size: 14px;
  padding-top: 6px;
  color: gray;
`;

const Divider = styled.hr`
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  width: 99%;
`;

const Text = styled.p`
  margin: 0;
  line-height: 21px;
  font-size: 14px;
  color: #1f1f1f;
`;

export {
  Divider,
  Grid,
  Logo,
  VideoHeading,
  Image,
  ItemTitle,
  SubHeading,
  SubText,
  Text,
  Title,
};
