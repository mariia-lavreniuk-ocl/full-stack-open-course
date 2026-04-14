import Header from "./Header";
import Button from "./Button";

const Feedback = ({ feedback }) => {
  const texts = feedback.texts
  const variables = feedback.variables

  return (
    <>
      <Header header={feedback.header} />
      <Button onClick={() => feedback.setGood(variables.good + 1)} text={texts.goodTxt} />
      <Button onClick={() => feedback.setNeutral(variables.neutral + 1)} text={texts.neutralTxt} />
      <Button onClick={() => feedback.setBad(variables.bad + 1)} text={texts.badTxt} />
    </>
  )
}

export default Feedback;