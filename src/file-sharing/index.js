import React from "react";
import { ReactComponent as Download } from "../upload/download.svg";
import { ReactComponent as Pause } from "../upload/pause.svg";
import {
  FiGrid,
  FiFolder,
  FiHardDrive,
  FiSettings,
  FiLogOut,
  FiSearch,
  FiImage,
  FiMusic,
  FiAlignLeft,
  FiLayers,
  FiDownload,
  FiMoreHorizontal,
  FiFile,
  FiPlay
} from "react-icons/fi";
import {
  Container,
  LeftArea,
  MainArea,
  RightArea,
  AppName,
  Icons,
  Header,
  Content,
  Title,
  Subtitle,
  AccessLink,
  AccessIcon,
  AccessText,
  AccessLinkContainer,
  HeaderRight,
  DownloadLine,
  LineHeader,
  DownloadArea,
  DownloadAreaIcon,
  DownloadAreaText,
  DownloadAreaItemIcon,
  Progressbar,
  VideoContentContainer,
  VideoContent,
  VideoContentLeft,
  VideoContentRight,
  HeaderBox,
  OneVideo,
  TwoVideo,
  Time,
  VideoInfo,
  VideoInfoContainer,
  TableFiles,
  FilesContainer,
  TableRow,
  Cell,
  CellData,
  CellHead,
  IconTable,
  LineContainer,
  ProgressLine,
  LineContent,
  ReceivedFiles,
  ImageWrapper,
  ReceivedFilesInfo
} from "./styled";

const File = (props) => {
  const items = [
    {
      icon: <FiImage />,
      text: "Image",
      bg: "#6166fe",
    },
    {
      icon: <FiMusic />,
      text: "Music",
      bg: "#4e4f97",
    },
    {
      icon: <FiAlignLeft />,
      text: "Docs",
      bg: "#3275f7",
    },
    {
      icon: <FiLayers />,
      text: "Apps",
      bg: "#22244a",
    },
    {
      icon: <FiDownload />,
      text: "Download",
      bg: "#30304e",
    },
  ];
  const downloads = [
    {
      day: "Today",
      fileIcon: <FiFile />,
      nameFile: "Glitter.mp4",
      infoFile: "Waiting for download",
      weight: "34.45 MB",
      downloadIcon: <Download />,
      bg: "#4e4f97",
    },
    {
      day: "Yesterday",
      fileIcon: <FiFile />,
      nameFile: "Glitter.mp4",
      infoFile: (
        <Progressbar>
          <span className="progress" />
        </Progressbar>
      ),
      downloadIcon: <Pause />,
      bg: "#4bc0dd",
    },
  ];
  const tables = [
    {
      icon: "PDF",
      bg: "#7e92c2",
      color: "#fff",
      name: "Brandenburg.pdf",
      size: "42 MB",
      modified: "Aug 26, 2020",
      action: <FiMoreHorizontal />,
    },
    {
      icon: "JPG",
      bg: "#70d997",
      color: "#fff",
      name: "TheLionsRoar.jpg",
      size: "500 KB",
      modified: "Jun 15, 2019",
      action: <FiMoreHorizontal />,
    },
    {
      icon: "MP3",
      bg: "#e89241",
      color: "#fff",
      name: "Serj Tankian - Your Mom.mp3",
      size: "7,78 MB",
      modified: "Apr 19, 2021",
      action: <FiMoreHorizontal />,
    },
    {
      icon: "MP4",
      bg: "#5782f1",
      color: "#fff",
      name: "Bright road.mp4",
      size: "112 MB",
      modified: "Dec 12, 2020",
      action: <FiMoreHorizontal />,
    },
  ];
  const { previews } = props;
  return (
    <Container>
      <LeftArea>
        <AppName>MyDocs</AppName>
        <Icons active>
          <a href={"grid"}>
            <FiGrid active />
          </a>
        </Icons>
        <Icons>
          <a href={"folder"}>
            <FiFolder />
          </a>
        </Icons>
        <Icons>
          <a href={"drive"}>
            <FiHardDrive />
          </a>
        </Icons>
        <Icons>
          <a href={"settings"}>
            <FiSettings />
          </a>
        </Icons>
        <Icons className={"Logout"}>
          <a href={"logout"}>
            <FiLogOut />
          </a>
        </Icons>
      </LeftArea>
      <MainArea>
        <Header>
          <input placeholder={"e.g. files.doc"} />
          <FiSearch />
        </Header>
        <Content>
          <Title>Quick Access</Title>
          <AccessLinkContainer>
            {items.map((item) => {
              return <Item {...item} />;
            })}
          </AccessLinkContainer>
        </Content>
        <VideoContentContainer>
          <HeaderBox>
            <Title>Preview</Title>
            <Subtitle>View in folders</Subtitle>
          </HeaderBox>
          <VideoContent>
            <VideoContentLeft>
              <Time>{previews[0].time}</Time>
              <VideoInfoContainer>
                <VideoInfo>
                  <p className={"TitleInfo"}>Happiness & Tears</p>
                  <p className={"Subtext"}>45.5 MB</p>
                </VideoInfo>
                <FiPlay />
              </VideoInfoContainer>
            </VideoContentLeft>
            <VideoContentRight>
              <OneVideo>
                <Time>{previews[1].time}</Time>
                <VideoInfoContainer>
                  <VideoInfo>
                    <p className={"TitleInfo"}>High Hopes</p>
                    <p className={"Subtext"}>50 MB</p>
                  </VideoInfo>
                </VideoInfoContainer>
              </OneVideo>
              <TwoVideo>
                <Time>{previews[2].time}</Time>
                <VideoInfoContainer>
                  <VideoInfo>
                    <p className={"TitleInfo"}>Relaxation</p>
                    <p className={"Subtext"}>210.2 MB</p>
                  </VideoInfo>
                </VideoInfoContainer>
              </TwoVideo>
            </VideoContentRight>
          </VideoContent>
        </VideoContentContainer>
        <FilesContainer>
          <HeaderBox>
            <Title>Recent Files</Title>
            <Subtitle>View all files</Subtitle>
          </HeaderBox>
          <TableFiles>
            <table
              style={{
                width: "100%",
                textAlign: "left"
              }}
            >
              <thead>
                <TableRow>
                  <CellHead>Name</CellHead>
                  <CellHead>Size</CellHead>
                  <CellHead>Last Modified</CellHead>
                  <CellHead>Action</CellHead>
                </TableRow>
              </thead>
              <tbody>
                {tables.map((tableContent) => {
                  return <TableContent {...tableContent} />;
                })}
              </tbody>
            </table>
          </TableFiles>
        </FilesContainer>
      </MainArea>
      <RightArea>
        <HeaderRight>
          <p>Downloads</p>
          <FiMoreHorizontal />
        </HeaderRight>
        {downloads.map((downloadBox) => {
          return <DownloadBox {...downloadBox} />;
        })}
        <HeaderRight>
          <p>File Received</p>
          <FiMoreHorizontal />
        </HeaderRight>
        <LineContainer>
          <ProgressLine>
            <span>14:30</span>
            <span>19:10</span>
          </ProgressLine>
          <LineContent>
            <ReceivedFiles>
                <ImageWrapper></ImageWrapper>
                <ImageWrapper></ImageWrapper>
                <ImageWrapper></ImageWrapper>
            </ReceivedFiles>
            <ReceivedFilesInfo>Received 3 mp4 total 305.7 MB</ReceivedFilesInfo>
          </LineContent>
        </LineContainer>
      </RightArea>
    </Container>
  );
};

const TableContent = (props) => {
  const { icon, name, size, modified, action, bg, color } = props;
  return (
    <TableRow>
      <Cell>
        <CellData>
          <IconTable bg={bg} color={color}>
            {icon}
          </IconTable>
          {name}
        </CellData>
      </Cell>
      <Cell>
        <CellData>{size}</CellData>
      </Cell>
      <Cell>
        <CellData>{modified}</CellData>
      </Cell>
      <Cell>
        <CellData className={"btn"}>{action}</CellData>
      </Cell>
    </TableRow>
  );
};

const DownloadBox = (props) => {
  const { day, bg, fileIcon, nameFile, weight, infoFile, downloadIcon } = props;
  return (
    <DownloadLine>
      <LineHeader>{day}</LineHeader>
      <DownloadArea>
        <DownloadAreaIcon bg={bg}>{fileIcon}</DownloadAreaIcon>
        <DownloadAreaText>
          <p className="name">{nameFile}</p>
          <p className="info">
            {weight}
            <span>{infoFile}</span>
          </p>
        </DownloadAreaText>
        <DownloadAreaItemIcon>{downloadIcon}</DownloadAreaItemIcon>
      </DownloadArea>
    </DownloadLine>
  );
};
const Item = (props) => {
  const { icon, text, bg } = props;
  return (
    <AccessLink>
      <AccessIcon bg={bg}>{icon}</AccessIcon>
      <AccessText>{text}</AccessText>
    </AccessLink>
  );
};

export default File;
