import styled from "styled-components";

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.primary};
  margin: 36px 0px;

  @media (min-width: 1024px) {
    margin: 72px 0px;
  }
`;

export default HorizontalLine;
