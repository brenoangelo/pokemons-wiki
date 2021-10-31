import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled,{ createGlobalStyle } from 'styled-components'
import { List } from './Pokemon/List'
import { View } from './Pokemon/View'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const AppContent = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  background: #36D1DC;
  background: linear-gradient(to right, #5B86E5, #36D1DC);
`

function App() {
  
  return (
    <AppContent>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={List}/>
          <Route path="/:name" exact component={View}/>
        </Switch>
      </BrowserRouter>
    </AppContent>
  )
}

export default App
