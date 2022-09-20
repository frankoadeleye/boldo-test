import styled from "styled-components";
import { FontSizeFor } from "utils/functions/font-size-for";

export const FooterBlock = styled.div`
  width: 100%;
  display: flex;
  ${FontSizeFor.NormalText};
  color: ${({ theme }) => theme.colors.black};
  padding: 150px 0px;
  height: auto;

  justify-content: space-between;
  flex-flow: row wrap;

  .Logo-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .logo-wrap {
      margin-bottom: 40px;
    }

    small {
      margin-bottom: 64px;
    }
  }

  @media (min-width: 768px) {
    .Logo-section {
      width: 40%;
      padding-right: 50px;
    }
  }

  @media (min-width: 1200px) {
    .Logo-section {
      width: 40%;
      padding-right: 150px;
    }
  }
`;

export const ReturnLinksBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 50%;
  height: auto;

  .header {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin-bottom: 56px;
  }

  a {
    color: ${({ theme }) => theme.colors.fadeText};
    cursor: pointer;
    margin-bottom: 32px;
  }

  @media (min-width: 768px) {
    width: 20%;
  }
`;
