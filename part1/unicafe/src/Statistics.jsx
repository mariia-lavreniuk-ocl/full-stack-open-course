import Header from "./Header";

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
        <p>{texts.allTxt}: {variables.all}</p>
      </div>
    </>
  )
}

export default Statistics;