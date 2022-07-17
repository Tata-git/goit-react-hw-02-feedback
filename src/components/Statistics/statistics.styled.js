import styled from 'styled-components';

export const Item = styled.li`
  font-weight: 400;
  font-size: 24px;

  &:not(:last-child) {
    margin-bottom: 14px;
  }

  text-transform: capitalize;
`;
