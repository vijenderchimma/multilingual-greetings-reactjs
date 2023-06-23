import {Component} from 'react'
import TabItem from './components/TabItem'
import './App.css'
import Greetings from './components/Greetings'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeTabId: languageGreetingsList[0].buttonText}

  getFilteredData = () => {
    const {activeTabId} = this.state
    const filteredData = languageGreetingsList.filter(
      eachItem => eachItem.buttonText === activeTabId,
    )
    return filteredData
  }

  onClickTabItem = id => {
    this.setState({activeTabId: id})
  }

  render() {
    const filteredData = this.getFilteredData()
    const {activeTabId} = this.state

    return (
      <div className="bg-container">
        <h1 className="greet-heading">Multilingual Greetings</h1>
        <ul className="btns-container">
          {languageGreetingsList.map(eachGreeting => (
            <TabItem
              eachGreeting={eachGreeting}
              key={eachGreeting.id}
              onClickTab={this.onClickTabItem}
              isActive={activeTabId === eachGreeting.buttonText}
            />
          ))}
        </ul>
        <div className="image-container">
          {filteredData.map(eachImage => (
            <Greetings eachImage={eachImage} key={eachImage.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default App
