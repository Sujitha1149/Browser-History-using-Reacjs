import {Component} from 'react'
import './index.css'
import ListSingleItem from '../ListSingleItem'

class ListItem extends Component {
  state = {
    searchInput: '',
    historyList: [],
  }

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({
      historyList: initialHistoryList,
    })
  }

  onSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onDelbtn = id => {
    const {historyList} = this.state
    const filteredList = historyList.filter(eachList => eachList.id !== id)
    this.setState({
      historyList: filteredList,
    })
  }

  render() {
    const {searchInput, historyList} = this.state

    const filteredList = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <div className="head">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search History"
              className="search"
              onChange={this.onSearchInput}
            />
          </div>
        </div>
        {filteredList.length === 0 ? (
          <p className="para-cont">There is no history to show</p>
        ) : (
          <ul className="card-cont">
            {filteredList.map(eachItem => (
              <ListSingleItem
                eachList={eachItem}
                key={eachItem.id}
                onDelbtn={this.onDelbtn}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default ListItem
