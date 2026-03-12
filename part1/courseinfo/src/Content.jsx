import Part from "./Part"

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exNum={props.ex1} />
      <Part part={props.part2} exNum={props.ex2} />
      <Part part={props.part3} exNum={props.ex3} />
    </div>
  )
}

export default Content