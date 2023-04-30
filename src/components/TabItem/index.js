import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const appClass = isActive ? 'active' : 'button'

  return (
    <li className="tab-items">
      <button className={appClass} type="button" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
