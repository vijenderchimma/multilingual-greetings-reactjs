import './index.css'

const TabItem = props => {
  const {eachGreeting, onClickTab, isActive} = props
  const {buttonText} = eachGreeting

  const onClickTabItem = () => {
    onClickTab(buttonText)
  }

  const btnClassName = isActive ? 'is-active' : 'tab-btn'

  return (
    <li className="list-item">
      <button type="button" className={btnClassName} onClick={onClickTabItem}>
        {buttonText}
      </button>
    </li>
  )
}

export default TabItem
