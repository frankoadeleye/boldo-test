import styled from "styled-components";
import { FontSizeFor } from "utils/functions/font-size-for";

export const NavbarBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 42px;
  ${FontSizeFor.NormalText};
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const NavItemsBlock = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  gap: 25px;

  a {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    display: flex;
    align-items: center;

    &:focus {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
