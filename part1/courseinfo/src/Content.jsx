import Part from "./Part"

const Content = (props) => {
  console.log(props)
  const part1 = props.part1
  const part2 = props.part2
  const part3 = props.part3

  return (
    <div>
      <Part part={part1.name} exNum={part1.exercises} />
      <Part part={part2.name} exNum={part2.exercises} />
      <Part part={part3.name} exNum={part3.exercises} />
    </div>
  )
}

export default Content