// Main.jsx
import styled from "styled-components";

export const Main = styled.main`
  grid-area: main;
  padding: var(--space-xl);
  width: calc(100% - 240px);
  transition: width 0.3s ease-in-out;
  opacity: ${({ isLoading }) => (isLoading ? 0.2 : 1)};
`;
