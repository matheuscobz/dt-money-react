import { ArrowLeft, ArrowRight } from 'phosphor-react'
import { PaginationButton, PaginationContainer, PaginationSpan } from './styles'

export function Pagination() {
  return (
    <PaginationContainer>
      <PaginationButton>
        <ArrowLeft color="#323238" size={20} />
      </PaginationButton>

      <PaginationSpan isActive="active">1</PaginationSpan>
      <PaginationSpan isActive="inactive">2</PaginationSpan>
      <PaginationSpan isActive="inactive">3</PaginationSpan>

      <PaginationButton>
        <ArrowRight color="#00875F" size={20} />
      </PaginationButton>
    </PaginationContainer>
  )
}
