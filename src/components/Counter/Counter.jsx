import useCountdown from "../../hooks/useCountdown"
import convertTime from "../../utils/convertTime"
import {
  StyledCounter,
  Title,
  Body,
  Wrapper,
  TimeBlock,
  TimeTitle,
  ButtonWrapper,
  IncreaseButton,
  DecreaseButton,
} from "./Counter.styles"

const COUNTDOWN_TIME = 10 * 1000 * 60 * 60
const TIME_REDUCES = {
  hour: 1000 * 60 * 60,
  minute: 1000 * 60,
  second: 1000,
}

function Counter() {
  const { time, setTime } = useCountdown(COUNTDOWN_TIME)
  const times = convertTime(time)

  const handleDecreaseTime = (e) => {
    if (time - TIME_REDUCES[e.target.name] >= 0)
      setTime(time - TIME_REDUCES[e.target.name])
  }

  const handleIncreaseTime = (e) => {
    setTime(time + TIME_REDUCES[e.target.name])
  }

  return (
    <StyledCounter>
      <Title>Countdown</Title>
      <Body>
        <Wrapper>
          <TimeTitle>Hours</TimeTitle>
          <TimeBlock>{times.hour}</TimeBlock>
          <ButtonWrapper>
            <DecreaseButton onClick={handleDecreaseTime} name="hour">
              -
            </DecreaseButton>
            <IncreaseButton onClick={handleIncreaseTime} name="hour">
              +
            </IncreaseButton>
          </ButtonWrapper>
        </Wrapper>
        <Wrapper>
          <TimeTitle>Minutes</TimeTitle>
          <TimeBlock>{times.minute}</TimeBlock>
          <ButtonWrapper>
            <DecreaseButton onClick={handleDecreaseTime} name="minute">
              -
            </DecreaseButton>
            <IncreaseButton onClick={handleIncreaseTime} name="minute">
              +
            </IncreaseButton>
          </ButtonWrapper>
        </Wrapper>
        <Wrapper>
          <TimeTitle>Seconds</TimeTitle>
          <TimeBlock>{times.second}</TimeBlock>
          <ButtonWrapper>
            <DecreaseButton onClick={handleDecreaseTime} name="second">
              -
            </DecreaseButton>
            <IncreaseButton onClick={handleIncreaseTime} name="second">
              +
            </IncreaseButton>
          </ButtonWrapper>
        </Wrapper>
      </Body>
    </StyledCounter>
  )
}
export default Counter
