import Header from "./Header";
import StatisticLine from "./StatisticLine";

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
        {allScores === 0 ? 
          <p>No feedback given</p>
        : 
          <>
            <table>
              <tr>
                <td>{texts.goodTxt}:</td>
                <td>{variables.good}</td>
              </tr>
              <tr>
                <td>{texts.neutralTxt}:</td>
                <td>{variables.neutral}</td>
              </tr>
              <tr>
                <td>{texts.badTxt}:</td>
                <td>{variables.bad}</td>
              </tr>
              <tr>
                <td>{texts.allTxt}:</td>
                <td>{allScores}</td>
              </tr>
              <tr>
                <td>{texts.averageTxt}:</td>
                <td>{calculateAverage(variables.good, variables.bad, allScores)}</td>
              </tr>
              <tr>
                <td>{texts.positiveTxt}:</td>
                <td>{calculatePositive(variables.good, allScores) + '%'}</td>
              </tr>
            </table>
            <StatisticLine text={texts.goodTxt} value={variables.good}/>
            <StatisticLine text={texts.neutralTxt} value={variables.neutral}/>
            <StatisticLine text={texts.badTxt} value={variables.bad}/>
            <StatisticLine text={texts.allTxt} value={allScores}/>
            <StatisticLine text={texts.averageTxt} value={calculateAverage(variables.good, variables.bad, allScores)}/>
            <StatisticLine text={texts.positiveTxt} value={calculatePositive(variables.good, allScores) + '%'}/>
          </>
        }
      </div>
    </>
  )
}

export default Statistics;