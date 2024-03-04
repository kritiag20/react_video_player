import React from "react";
import { Avatar, DataWrapper, LayoutVideo } from "../assets/main";
import { Divider, SubHeading, SubText, Text, Title } from "../assets/styles";
import nFormatter from "./common";

function Player({ videoData }) {
  return (
    <LayoutVideo>
      <video
        src={videoData?.videoUrl}
        width="100%"
        height="100%"
        style={{ borderRadius: "6px" }}
        controls
      ></video>
      <DataWrapper>
        <Title>{videoData?.title}</Title>
        <div className="flex">
          <Avatar />
          <div className="flex-col">
            <SubHeading>{videoData?.author}</SubHeading>
            <SubText>{nFormatter(678920, 1)} Subscribers</SubText>
          </div>
        </div>
      </DataWrapper>
      <Divider />
      <DataWrapper>
        <SubHeading color="#000">Description</SubHeading>
        <Text>{videoData?.description}</Text>
      </DataWrapper>
    </LayoutVideo>
  );
}

export default Player;
