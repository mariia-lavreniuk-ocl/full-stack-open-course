import Header from "./Header";

const calculateAverage = (goodScores, badScores, allScoresNum) => {
  let result = (goodScores - badScores) / allScoresNum;
  return result || 0;
}

const calculateAll = (goodScores, neutralScores, badScores) => {
  return goodScores + neutralScores + badScores;
}

const Statistics = ({ statistics }) => {
  const texts = statistics.texts
  const variables = statistics.variables

  return (
    <>
      <Header header={statistics.header} />
      <div>
        <p>{texts.goodTxt}: {variables.good}</p>
        <p>{texts.neutralTxt}: {variables.neutral}</p>
        <p>{texts.badTxt}: {variables.bad}</p>
        <p>{texts.allTxt}: {calculateAll(variables.good, variables.neutral, variables.bad)}</p>
        <p>{texts.averageTxt}: {calculateAverage(variables.good, variables.bad, calculateAll(variables.good, variables.neutral, variables.bad))}</p>
      </div>
    </>
  )
}

export default Statistics;