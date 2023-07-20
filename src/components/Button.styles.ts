import styled, { css } from "styled-components"

type ButtonVariant = "danger" | "success" | "primary" | "secondary"

interface ButtonContainerProps {
  variant?: ButtonVariant
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  succes: "green",
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
`
