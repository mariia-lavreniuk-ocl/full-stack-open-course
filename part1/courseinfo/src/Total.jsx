const Total = (props) => {
  console.log(props)
  const parts = props.parts
  let result = 0
  parts.forEach(part => {
    result += part.exercises
  });
  return (
    <p>Number of exercises {result}</p>
  )
}

export default Total