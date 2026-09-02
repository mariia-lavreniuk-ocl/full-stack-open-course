import Header from "./Header";

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

export default Statistics;