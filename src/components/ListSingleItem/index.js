import {Component} from 'react'
import './index.css'

class ListSingleItem extends Component {
  render() {
    const {eachList, onDelbtn} = this.props

    function onDelItem() {
      onDelbtn(eachList.id)
    }

    return (
      <li className="card-item" key={eachList.id}>
        <div className="left-part">
          <p>{eachList.timeAccessed}</p>
          <div className="img-cont">
            <img
              src={`${eachList.logoUrl}`}
              alt=" domain logo"
              className="card-logo"
            />
          </div>
          <p>{eachList.title}</p>
          <div className="img-cont">
            <p>{eachList.domainUrl}</p>
          </div>
        </div>
        <button
          className="img-cont"
          type="button"
          onClick={onDelItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="del-icon"
          />
        </button>
      </li>
    )
  }
}
export default ListSingleItem
