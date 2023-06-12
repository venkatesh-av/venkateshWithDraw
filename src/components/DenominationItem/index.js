import './index.css'

const DenominationItem = ({denominationsList, changeAmount, key}) => {
  const onWithdraw50 = () => {
    changeAmount(50)
  }
  const onWithdraw100 = () => {
    changeAmount(100)
  }
  const onWithdraw200 = () => {
    changeAmount(200)
  }
  const onWithdraw500 = () => {
    changeAmount(500)
  }

  return (
    <ul type="none">
      <li>
        <button type="button" className="button-amount" onClick={onWithdraw50}>
          {denominationsList[0].value}
        </button>
      </li>
      <li>
        <button type="button" className="button-amount" onClick={onWithdraw100}>
          {denominationsList[1].value}
        </button>
      </li>
      <li>
        <button type="button" className="button-amount" onClick={onWithdraw200}>
          {denominationsList[2].value}
        </button>
      </li>
      <li>
        {' '}
        <button type="button" className="button-amount" onClick={onWithdraw500}>
          {denominationsList[3].value}
        </button>
      </li>
    </ul>
  )
}

export default DenominationItem
