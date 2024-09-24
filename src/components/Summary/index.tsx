import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)
  console.log(transactions)
  return (
    <SummaryContainer> 
      <SummaryCard >
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00B37E"/>
        </header>

        <strong>R$ {transactions}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Sáidas</span>
          <ArrowCircleDown size={32} color="#F75A68"/>
        </header>

        <strong>R$ 1.259,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFFF"/>
        </header>

        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}