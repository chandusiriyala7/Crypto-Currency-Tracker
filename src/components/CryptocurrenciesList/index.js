// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyList()
  }

  getCryptocurrencyList = async () => {
    const {currencyList, isLoading} = this.state
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
    }))

    this.setState({currencyList: formattedData, isLoading: false})
    console.log(currencyList)
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div className="Loader" data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="crypto">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="
https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <div className="crypto-table">
              <div className="table-heading">
                <div>
                  <p>Coin Type</p>
                </div>
                <div className="currency">
                  <p>USD</p>
                  <p>EURO</p>
                </div>
              </div>
              <ul>
                {currencyList.map(eachCurrency => (
                  <CryptocurrencyItem
                    key={eachCurrency.id}
                    eachCurrency={eachCurrency}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}
export default CryptocurrenciesList
