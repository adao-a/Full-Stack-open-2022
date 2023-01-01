import { useState } from 'react'

const Title = ({ text }) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all

  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={(positive * 100).toFixed(6) + '%'} />
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNetural = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Title text={"give feedback"} />
      <Button onClick={increaseGood} text={"good"} />
      <Button onClick={increaseNetural} text={"netural"} />
      <Button onClick={increaseBad} text={"bad"} />

      <Title text={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App