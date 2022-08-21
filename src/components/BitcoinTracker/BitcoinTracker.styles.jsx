import styled from "styled-components"

export const Title = styled.h1`
  margin-bottom: 0.8rem;
  font-weight: 500;
  text-align: center;
`
export const Table = styled.table`
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 1rem;
  margin-bottom: 2rem;
  border-collapse: collapse;
  box-shadow: 3px 3px 10px 0 #ffd2cb;
`
export const Head = styled.thead`
  background-color: #ffd2cb;
`
export const Body = styled.tbody``

export const HeadTitle = styled.th`
  font-weight: 600;
  font-size: 1.2rem;
  padding: 1rem;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem;
  }
`
export const HeadRow = styled.tr``

export const Row = styled.tr`
  border-radius: 2rem;
  background-color: #ffebe8;

  &:nth-child(even) {
    background-color: #ffd2cb;
  }
`

export const Price = styled.td`
  color: ${({ isDataUpdated }) => isDataUpdated && "#40C057"};
  transition: color 400ms ease;
  font-weight: 600;
  padding: 1rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
`

export const Data = styled.td`
  padding: 1rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
`
