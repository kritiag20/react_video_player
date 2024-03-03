import React from "react";
import {
  Button,
  DataWrapper,
  Grid,
  Image,
  Item,
  SubText,
  Title,
} from "../assets/main";
import videoList from "../assets/data";
import nFormatter from "./common";

function Playlist() {
  return (
    <div>
      <p>Videos List</p>
      {}
      <div>
        <Grid>
          {videoList?.map((val) => (
            <Item>
              <Image alt="Thumbnail" src={val.thumbnailUrl} />
              <DataWrapper>
                <Title>{val.title}</Title>
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

        {/* <Button>OPEN</Button> */}
      </div>
    </div>
  );
}

export default Playlist;
