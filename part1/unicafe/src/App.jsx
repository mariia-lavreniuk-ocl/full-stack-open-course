import Statistics from "./Statistics";
import Feedback from "./Feedback";
import { useState } from 'react'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let texts = {
    goodTxt: 'good',
    neutralTxt: 'neutral',
    badTxt: 'bad',
    allTxt: 'all',
    averageTxt: 'average'
  };

  let variables = {
    good: good,
    neutral: neutral,
    bad: bad,
  }

  let feedback = {
    header: 'give feedback',
    setGood,
    setNeutral,
    setBad,
    variables: variables,
    texts: texts
  };

  let statistics = {
    header: 'statistics',
    texts: texts,
    variables: variables
  };

  return (
    <>
      <Feedback feedback={feedback} />
      <Statistics statistics={statistics} />
    </>
  )
}

export default App;
