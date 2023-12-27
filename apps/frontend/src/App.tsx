import { useState } from "react";
import { Information } from "./apps/Information";
import { Web3App } from "./apps/Web3App";
import "./App.css";
import { Box } from "./apps/box";

enum Page {
  Information,
  Web3App,
}

export const App = () => {
  const [page, setPage] = useState(Page.Information);

  const onToggleApp = () => {
    setPage(page === Page.Information ? Page.Web3App : Page.Information);
  };

  return (
    <div className="App font-mono	">
      <header className="App-header flex justify-center flex-col py-10">
        <h1 className=""> COMING SOON </h1>
      </header>
      <div className="flex w-full">
        <div
          className={`bg-black p-2 w-screen absolute transition-all duration-700 h-full ${
            page === Page.Information ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Information onGoToApp={onToggleApp} />
        </div>
        <div
          className={`bg-black text-orange-300 p-2 w-screen absolute transition-all duration-700 h-full ${
            page === Page.Web3App ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Web3App onGoToApp={onToggleApp} />
        </div>
      </div>
    </div>
  );
};
