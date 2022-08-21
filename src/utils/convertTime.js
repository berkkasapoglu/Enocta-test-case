const convertTime = (miliseconds) => {
  let seconds = Math.floor(miliseconds / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  seconds = seconds % 60
  minutes = minutes % 60

  return {
    hour: hours,
    minute: minutes,
    second: seconds,
  }
}

export default convertTime
