import {useState} from 'react';
import { Information } from './apps/Information';
import { Web3App } from './apps/Web3App';
import "./App.css"

enum Page {
  Information,
  Web3App
}

export const App = () => {
  const [page, setPage] = useState(Page.Information);

  const onToggleApp = () => {
    setPage(page === Page.Information ? Page.Web3App : Page.Information)
  }
  return (
    <div className="App">
      <header className="App-header">
        {page === Page.Information ? <Information onGoToApp={onToggleApp}/> : <Web3App onGoToApp={onToggleApp}/>}
      </header>
    </div>
  );
}
