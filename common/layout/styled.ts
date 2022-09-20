import styled from "styled-components";

export const LayoutBlock = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 7%;
  margin-top: 28px;
  box-sizing: border-box;

  @media (min-width: 1024px) {
    margin-top: 56px;
  }
`;
