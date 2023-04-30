// Write your code here

import './index.css'

const AppItem = props => {
  const {AppDetails} = props
  const {appName, imageUrl} = AppDetails
  return (
    <li className="app-items">
      <img src={imageUrl} className="image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
