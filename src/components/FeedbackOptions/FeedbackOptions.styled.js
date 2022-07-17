import styled from 'styled-components';

export const SectionButton = styled.div`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 24px;

  padding: 10px;

  &:not(:last-child) {
    margin-right: 16px;
  }
  text-transform: capitalize;
`;
