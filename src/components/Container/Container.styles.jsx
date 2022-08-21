import styled from "styled-components"

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: 5rem auto;
  @media (max-width: 768px) {
    margin: 4rem auto;
    padding: 0 1.5rem;
  }
`
