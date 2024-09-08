// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {eachCurrency} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachCurrency

  return (
    <li className="currency-item">
      <div className="currency-name">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p>{currencyName}</p>
      </div>
      <div className="currency-value">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
