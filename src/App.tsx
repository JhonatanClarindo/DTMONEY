import { useState } from 'react'
import Modal from 'react-modal'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransaction';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';


Modal.setAppElement('#root')

export const App = () => {

const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);


function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true)
}


function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
}

  return (
    <TransactionsProvider>
      <Header onOpenNewTransaction={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}


