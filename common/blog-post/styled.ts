import styled from "styled-components";
import { FontSizeFor } from "utils/functions/font-size-for";
import { PerfectlyCentered } from "utils/functions/perfectly-centered";

export const BlogPostBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 180px;
  align-items: center;

  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }

  @media (min-width: 1024px) {
    min-height: 386px;
  }
`;

export const BlogImageWrap = styled.div`
  width: 100%;

  height: auto;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 24px;

  @media (min-width: 600px) {
    width: 550px;
    margin-bottom: 0px;
  }
`;
export const BlogContentWrap = styled.div`
  width: 100%;
  
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
    height: 28px;
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
    ${FontSizeFor.HeaderText};
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

   @media (min-width: 600px) {
    width: 47%;
  }
`;
