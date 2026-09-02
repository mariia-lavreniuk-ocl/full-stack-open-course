import Header from "./Header";
import Feedback from "./Feedback";
import { useState } from 'react'

const calculateAverage = (goodScores, badScores, allScoresNum) => {
  let result = (goodScores - badScores) / allScoresNum;
  return result || 0;
}

const calculateAll = (goodScores, neutralScores, badScores) => {
  return goodScores + neutralScores + badScores;
}

const calculatePositive = (positiveScores, allScores) => {
  return allScores === 0 ? 0 : (positiveScores * 100 / allScores);
}

const Statistics = ({ statistics }) => {
  const texts = statistics.texts
  const variables = statistics.variables
  const allScores = calculateAll(variables.good, variables.neutral, variables.bad);

  return (
    <>
      <Header header={statistics.header} />
      <div>
        <p>{texts.goodTxt}: {variables.good}</p>
        <p>{texts.neutralTxt}: {variables.neutral}</p>
        <p>{texts.badTxt}: {variables.bad}</p>
        <p>{texts.allTxt}: {allScores}</p>
        <p>{texts.averageTxt}: {calculateAverage(variables.good, variables.bad, allScores)}</p>
        <p>{texts.positiveTxt}: {calculatePositive(variables.good, allScores)}</p>
      </div>
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let texts = {
    goodTxt: 'good',
    neutralTxt: 'neutral',
    badTxt: 'bad',
    allTxt: 'all',
    averageTxt: 'average',
    positiveTxt: 'positive'
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
