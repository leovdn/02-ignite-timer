import { ButtonContainer } from "./Button.styles"

interface ButtonProps {
  variant?: "danger" | "success" | "primary" | "secondary"
}

export function Button({ variant }: ButtonProps) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>
}
