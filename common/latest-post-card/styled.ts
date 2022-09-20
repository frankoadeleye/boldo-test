import styled from "styled-components";
import { FontSizeFor } from "utils/functions/font-size-for";
import { PerfectlyCentered } from "utils/functions/perfectly-centered";

export const LatestPostBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  min-height: 180px;
  align-items: center;
  margin-bottom: 48px;

  flex-direction: column;

  @media (min-width: 650px) {
    width: 47%;
  }

  @media (min-width: 1024px) {
    min-height: 386px;
    width: 30%;
  }
`;

export const BlogImageWrap = styled.div`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 12px;
`;
export const BlogContentWrap = styled.div`
  width: 100%;
  gap: 12px;
  height: auto;
  display: flex;
  space-between;
  flex-direction: column;
  align-self: right;

  small {
    ${FontSizeFor.NormalText};
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    width: 231px;
    color: ${({ theme }) => theme.colors.primary};
    

    span:nth-child(1) {
      font-weight: ${({ theme }) => theme.fontWeight.veryBold};
      color: ${({ theme }) => theme.colors.primary};
    }

    span:nth-child(2) {
      color: ${({ theme }) => theme.colors.fadeText};
    }
  }

  .blog-post-title {
    ${FontSizeFor.NormalText};
    color: ${({ theme }) => theme.colors.black};
     
  }

  .author-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 12px;
    width: auto;
    height: 32px;
    

    .author-image-wrap{
      width: 32px;
      height: 32px;
      border-radius: 50%;
      ${PerfectlyCentered};
    }

    .author{
        color: ${({ theme }) => theme.colors.black};
    }
  }
`;
