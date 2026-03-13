import Part from "./Part"

const Content = (props) => {
  console.log(props)
  const parts = props.parts

  return (
    <div>
      {parts.map((part, key) =>
        <Part key={key} part={part} />
      )}
    </div>
  )
}

export default Content