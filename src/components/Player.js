import React, { useRef } from "react";
import { Avatar, DataWrapper, LayoutVideo } from "../assets/main";
import { Divider, SubHeading, SubText, Text, Title } from "../assets/styles";
import Author from "../assets/user.png";
import nFormatter from "./common";

function Player({ videoData }) {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <LayoutVideo>
      <div style={{ height: "600px" }}>
        <video
          ref={videoRef}
          autoPlay
          src={videoData?.videoUrl}
          onPlay={handlePlay}
          onPause={handlePause}
          width="100%"
          height="100%"
          style={{ borderRadius: "6px" }}
          controls
          poster={videoData?.thumbnailUrl}
        ></video>
      </div>
      <DataWrapper>
        <Title>{videoData?.title}</Title>
        <div className="flex">
          <Avatar>
            <img src={Author} alt="" height={"34px"} width={"34px"} />
          </Avatar>
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
