import styled from "styled-components";

export const FormInputBlock = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 240px;
  padding: 0px 32px;
  background: #ffffff;
  border: 1px solid #ffffff;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 50px;

  &:focus {
    outline-style: none;
  }

  @media (min-width: 1024px) {
    .subscribe-form {
      button {
        width: 370px;
      }
    }
  }
`;
