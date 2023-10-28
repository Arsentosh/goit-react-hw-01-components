import styled from 'styled-components';

const getActiveColor = props => {
  switch (props.$isOnline) {
    case false:
      return props.theme.colors.red;
    case true:
      return props.theme.colors.springGreen;
    default:
      return props.theme.colors.lightSteelBlue;
  }
};

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: -7px 10px 13px -3px rgba(66, 62, 62, 0.75);
  width: 300px;
  height: 50px;
`;

export const FriendIsOnline = styled.span`
  width: 15px;
  height: 15px;
  margin-left: 20px;
  border-radius: 50px;
  background-color: ${getActiveColor};
`;

export const FriendName = styled.span`
  font-weight: 600;
`;
