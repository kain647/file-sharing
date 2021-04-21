import styled from "styled-components";
import bgImage from "../upload/13549.jpg";
import bgImageOne from "../upload/15155.jpg";
import bgImageTwo from "../upload/15423.jpg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0 10px rgb(255 255 255 / 40%);
  border-radius: 10px;
`;
export const LeftArea = styled.div`
  display: flex;
  height: 800px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 32px;
  border-radius: 10px 0 0 10px;
`;
export const Icons = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  :last-child {
    margin-bottom: 0;
  }
  &.Logout {
    margin-top: auto;
  }
  svg {
    width: var(--size);
    height: var(--size);
    --size: 24px;
    color: ${({ active }) => (active ? "#0f0f10" : "#79798c")};
  }
`;
export const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 770px;
  height: 800px;
  overflow-y: auto;
  background: linear-gradient(97deg, #f2f7fd 0%, #f0f4fd 90%);
`;
export const Header = styled.div`
  display: flex;
  position: relative;
  padding: 24px 40px;
  align-items: center;
  margin-bottom: 32px;
  input {
    display: flex;
    width: 100%;
    height: 40px;
    align-items: center;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 6px 0 rgb(136 148 171 / 20%),
      0 24px 20px -24px rgb(71 82 107 / 10%);
    border: none;
    outline: none;
    padding: 0 40px 0 12px;
    font-size: 12px;
  }
  svg {
    position: absolute;
    width: var(--size);
    height: var(--size);
    --size: 22px;
    color: #79798c;
    right: 50px;
  }
`;
export const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 300px;
  height: 800px;
  padding: 24px;
  background: linear-gradient(180deg, #e0e9fd 0%, #e9ecf1 90%);
  border-radius: 0 10px 10px 0;
`;
export const AppName = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 32px;
`;
export const Content = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 0 40px;
`;
export const Title = styled.h1`
  display: flex;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 16px;
`;
export const Subtitle = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 16px;
  color: #8683d6;
  cursor: pointer;
`;
export const AccessLink = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //padding: 10px;
  cursor: pointer;
`;
export const AccessIcon = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: var(--size);
  height: var(--size);
  --size: 76px;
  border-radius: 12px;
  padding: 20px;
  color: #fff;
  background-color: ${({ bg }) => bg};
  svg {
    width: var(--size);
    height: var(--size);
    --size: 36px;
  }
`;
export const AccessText = styled.div`
  display: flex;
  color: #79798c;
  font-size: 12px;
  line-height: 24px;
`;
export const AccessLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HeaderRight = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
`;
export const DownloadLine = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 0;
`;
export const LineHeader = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 16px;
  color: #888da9;
  margin-bottom: 12px;
`;
export const DownloadArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eceffb;
  border-radius: 12px;
  padding: 8px;
  cursor: pointer;
`;
export const DownloadAreaIcon = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ bg }) => bg};
  padding: 8px;
  border-radius: 50%;
  svg {
    color: #fff;
  }
`;
export const DownloadAreaText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  .name {
    line-height: 16px;
    margin: 0;
    padding: 0;
    font-size: 12px;
  }
  .info {
    color: #888da9;
    font-size: 10px;
    margin: 0;
    padding: 0;
  }
`;
export const DownloadAreaItemIcon = styled.div`
  display: flex;
  svg {
    width: var(--size);
    height: var(--size);
    --size: 24px;
    fill: #4bc3a7;
  }
`;
export const Progressbar = styled.div`
  display: flex;
  height: 4px;
  width: 145px;
  overflow: hidden;
  border-radius: 2px;
  background-color: #dadff3;
  margin: 6px 0;
  .progress {
    height: 100%;
    width: 40%;
    background-color: #4bc0dd;
  }
`;
export const VideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
`;
export const VideoContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;
export const VideoContentLeft = styled.div`
  display: flex;
  position: relative;
  width: 340px;
  height: 225px;
  background-size: cover;
  background-image: url(${bgImage});
  border-radius: 7px;
  cursor: pointer;
  svg {
    background-color: #fff;
    padding: 10px;
    border-radius: 50%;
  }
`;
export const VideoContentRight = styled.div`
  display: flex;
`;
export const OneVideo = styled.div`
  display: flex;
  position: relative;
  width: 160px;
  height: 225px;
  background-size: cover;
  background-image: url(${bgImageOne});
  border-radius: 7px;
  margin-right: 10px;
  cursor: pointer;
`;
export const TwoVideo = styled.div`
  display: flex;
  position: relative;
  width: 160px;
  height: 225px;
  background-size: cover;
  background-image: url(${bgImageTwo});
  border-radius: 7px;
  cursor: pointer;
`;
export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Time = styled.div`
  display: flex;
  position: absolute;
  border-radius: 10px;
  padding: 4px 12px;
  background-color: rgba(139, 156, 163, 0.5);
  font-size: 10px;
  right: 12px;
  top: 12px;
  color: #fff;
  z-index: 1;
`;
export const VideoInfoContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  padding: 10px;
`;
export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  p {
    padding: 0;
    margin: 0;
  }
  .Subtext {
    font-size: 14px;
    line-height: 24px;
    color: #dadada;
  }
  .TitleInfo {
    font-size: 14px;
    line-height: 24px;
    color: #fff;
  }
`;
export const TableFiles = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 2px 6px 0 rgb(136 148 171 / 20%),
    0 24px 20px -24px rgb(71 82 107 / 10%);
  border-radius: 12px;
  padding: 12px;
  background-color: #fff;
`;
export const FilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  margin-bottom: 40px;
`;
export const TableContentBox = styled.div`
  display: flex;
`;
export const IconTable = styled.div`
  margin-right: 10px;
  width: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  border-radius: 4px;
  font-size: 8px;
  padding: 4px;
`;
export const TableRow = styled.tr``;
export const CellHead = styled.th``;
export const Cell = styled.td`
  font-size: 12px;
  line-height: 16px;
  padding: 8px 0px;
`;
export const CellData = styled.div`
  display: flex;
  flex-direction: row;
  &.btn {
    cursor: pointer;
  }
`;
export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 150px;
  width: 100%;
`;
export const ProgressLine = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  position: relative;
  width: 2px;
  height: 100%;
  justify-content: space-between;
  background-color: #22244a;
  span {
    margin-left: 12px;
    font-size: 10px;
    color: #888da9;
  }
  :before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #22244a;
    transform: translateX(-50%);
    left: 50%;
  }
  :after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #22244a;
    transform: translateX(-50%);
    left: 50%;
    bottom: 0;
  }
`;
export const LineContent = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
export const ReceivedFiles = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 70px;
  height: 70px;
  background-color: #5782f1;
  margin: 10px;
  border-radius: 4px;
  :before {
    display: flex;
    align-items: center;
    justify-content: center;
    content: "MP4";
    color: #fff;
  }
`;
export const ReceivedFilesInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 16px;
`;
