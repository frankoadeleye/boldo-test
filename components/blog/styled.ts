import styled from "styled-components";
import { PerfectlyCentered } from "utils/functions/perfectly-centered";
import { FontSizeFor } from "utils/functions/font-size-for";
import Svgs from "assets/svgs";

const { SubscribeBannerBg } = Svgs;

export const BlogBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const BlogHeader = styled.div`
  ${PerfectlyCentered};
  flex-direction: column;
  padding: 0px;
  gap: 12px;
  width: 100%;
  min-height: 130px;
  margin: auto;
  ${FontSizeFor.NormalText};
  color: ${({ theme }) => theme.colors.primary};

  div {
    ${FontSizeFor.HeaderText};
    ${PerfectlyCentered};
    text-align: center;
    @media (min-width: 1200px) {
      font-size: 64px;
    }
  }

  @media (min-width: 1024px) {
    min-height: 183px;
  }
`;

export const LatestPostSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  height: auto;
  flex-flow: row wrap;
  padding: 0px 5%;

  .header {
    ${FontSizeFor.HeaderText};
    margin-bottom: 36px;
  }
`;

export const LatestPostsWrap = styled.div`
  width: 100%;
  display: flex;

  height: auto;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const SubscribeBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 391px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)),
    url(${SubscribeBannerBg});

  .subscribe-text {
    font-size: ${FontSizeFor.HeaderText};
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    width: 70%;
  }

  .subscribe-form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    button {
      width: 150px;
      ${PerfectlyCentered};
      background: ${({ theme }) => theme.colors.secondary};
      height: 60px;
      border-radius: ${({ theme }) => theme.borderRadius.large};
      margin-top: 50px;
      margin-left: 20px;
      cursor: pointer;
      font-weight: ${({ theme }) => theme.fontWeight.veryBold};
    }
  }

  @media (min-width: 650px) {
    .subscribe-form {
      flex-direction: row;
      button {
        width: 210px;
      }
    }
  }
`;

export const LoadMoreBtnWrap = styled.div`
  width: 100%;
  ${PerfectlyCentered};
  margin: 12px 0px 30px 0px;

  @media (min-width: 1024px) {
    margin: 52px 0px 100px 0px;
  }
`;
