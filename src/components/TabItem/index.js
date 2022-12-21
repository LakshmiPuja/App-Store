// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, isActive, setActiveTabId} = props
  const {tabId, displayText} = tabsList
  const activeTabClassName = isActive ? 'active-btn' : ''
  const onClickTabItem = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="list-item">
      <button
        className={`tab-btn ${activeTabClassName}`}
        type="button"
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
