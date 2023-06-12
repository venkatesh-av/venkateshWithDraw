import './index.css'
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    initialAmount: 2000,
  }

  changeAmount = decreaseAmount => {
    this.setState(prevState => ({
      initialAmount: prevState.initialAmount - decreaseAmount,
    }))
  }

  render() {
    const {initialAmount} = this.state

    const {denominationsList} = this.props
    console.log(initialAmount)

    return (
      <div className="main-bg">
        <div className="card-container">
          <div className="div1-container">
            <p className="surname-bg">V</p>
            <p className="text-color">Venkatesh Amajala</p>
          </div>
          <div className="div2-container">
            <p className="yourBalence">Your Balance</p>
            <div>
              <p className="amount">{initialAmount}</p>
              <p className="in-rupees">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="withdraw">Withdraw</p>
            <p className="yourBalence">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <div>
            <DenominationItem
              denominationsList={denominationsList}
              changeAmount={this.changeAmount}
              key={denominationsList.id}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
