import styled from "styled-components"

export const StyledCounter = styled.div`
  margin-bottom: 3rem;
`

export const Title = styled.h1`
  margin-bottom: 0.8rem;
  font-weight: 500;
  text-align: center;
`

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  @media (max-width: 768px) {
    gap: 10px;
  }
`

export const TimeTitle = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.7rem;
  font-weight: 500;
`
export const Wrapper = styled.div`
  text-align: center;
`

export const TimeBlock = styled.p`
  width: 150px;
  padding: 1rem 0;
  border-radius: 1rem;
  background-color: #fff;
  color: #8d8593;
  box-shadow: 10px 50px 45px 5px #ffd2cb;
  font-size: 5rem;
  font-weight: 600;
  @media (max-width: 768px) {
    width: 100px;
    font-size: 3.5rem;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0.8rem 0;
  border-radius: 0.4rem;
  background-color: #ffd2cb;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.3);
  margin-top: 2rem;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: #ffd2cb;
  font-size: 2.5rem;
  border-radius: 0.2rem;
  transition: background-color 300ms ease;
`

export const IncreaseButton = styled(Button)`
  background-color: #ff8331;
  &:hover {
    background-color: #f26c12;
  }
`

export const DecreaseButton = styled(Button)`
  background-color: #ef4444;
  &:hover {
    background-color: #e82626;
  }
`
