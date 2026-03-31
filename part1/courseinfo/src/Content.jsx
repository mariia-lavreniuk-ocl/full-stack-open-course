import Part from "./Part"

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part, key) =>
        <Part key={key} part={part} />
      )}
    </div>
  )
}

export default Content