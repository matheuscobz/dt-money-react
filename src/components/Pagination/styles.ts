import styled from "styled-components";

interface PaginationSpanProps {
  isActive?: 'active' | 'inactive'
}

export const PaginationContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;  

`
export const PaginationSpan = styled.span<PaginationSpanProps>`
  background: ${props => props.isActive === 'active' ? props.theme["green-300"] : props.theme['gray-600']};
  color: ${props => props.isActive === 'active' ? props.theme.white : props.theme['gray-500']};

  border-radius: 6px;
  padding: 0.5rem 0.75rem;

`

export const PaginationButton = styled.button`
  display: flex;
  justify-items: center;
  align-items: center;
  background: transparent;
  border: none;


`