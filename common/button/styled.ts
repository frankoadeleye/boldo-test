import styled, { css } from "styled-components";
import { ButtonProps } from "./types";

const SmallBtn = css`
  width: 128px;
  height: 40px;
  font-size: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

const LargeBtn = css`
  padding: 16px 56px;
  width: 219px;
  height: 60px;
  font-size: 20px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
`;

export const ButtonBlock = styled.button<ButtonProps>`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  outline-style: none;
  gap: 8px;
  color: ${({ theme }) => theme.colors.primary};
  background: inherit;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeight.veryBold};

  ${(props) =>
    props.Size === "large"
      ? LargeBtn
      : props.Size === "small"
      ? SmallBtn
      : SmallBtn};
`;
