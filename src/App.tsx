import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionProvider } from "./contexts/TransactionsContext";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <TransactionProvider >
        <Transactions />
      </TransactionProvider>
      
      
    </ThemeProvider>
  )
}

