import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.click}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  if (props.text == 'positive') {
    return (
      <tr>
      <td>{props.text}</td><td>{props.value} %</td>
    </tr>
    )
  }
  else {
    return (
      <tr>
        <td>{props.text}</td><td>{props.value}</td>
      </tr>
    )
  }
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const all = props.good + props.neutral + props.bad
  const average = (props.good - props.bad) / all
  const positive = (props.good * 100) / all

  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <p>No feedback given</p>
    )
  }
  else {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} />
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    console.log('good clicked')
    setGood(good + 1)
  }

  const handleNeutral = () => {
    console.log('neutral clicked')
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    console.log('bad clicked')
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button click={handleGood} text='good' />
      <Button click={handleNeutral} text='neutral' />
      <Button click={handleBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
