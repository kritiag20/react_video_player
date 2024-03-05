import React from "react";
import videoList from "../assets/data";
import { DataWrapper, Item, LayoutList, ListWrap } from "../assets/main";
import {
  Grid,
  VideoHeading,
  Image,
  ItemTitle,
  SubText,
} from "../assets/styles";
import nFormatter from "./common";

function Playlist({ setselVideo }) {
  const handleVideo = (data) => {
    setselVideo(data);
  };

  return (
    <LayoutList>
      <VideoHeading>More Videos</VideoHeading>
      <ListWrap>
        <Grid>
          {videoList?.map((val) => (
            <Item onClick={() => handleVideo(val)}>
              <Image alt="Thumbnail" src={val.thumbnailUrl} />
              <DataWrapper width>
                <ItemTitle>{val.title}</ItemTitle>
                <SubText style={{ margin: 0 }}>
                  Published: {val.uploadTime}
                </SubText>
                <SubText style={{ margin: 0 }}>
                  {nFormatter(val.views, 1)} views
                </SubText>
              </DataWrapper>
            </Item>
          ))}
        </Grid>
      </ListWrap>
    </LayoutList>
  );
}

export default Playlist;
