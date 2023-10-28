import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 270px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: ${p => p.theme.colors.white};
`;

export const ProfileImage = styled.img`
  margin-top: 20px;
  border-radius: 50px;
`;

export const UserName = styled.p`
  font-weight: 600;
`;

export const UserTag = styled.p`
  color: ${p => p.theme.colors.ghostWhile};
`;

export const UserLocation = styled.p`
  margin-bottom: 20px;
  color: ${p => p.theme.colors.ghostWhile};
`;

export const ProfileList = styled.ul`
  display: flex;
`;

export const ProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  border-radius: 2px;
  border: 1px solid ${p => p.theme.colors.ghostWhile};
  background-color: ${p => p.theme.colors.lightSteelBlue};
`;

export const UserLabel = styled.span`
  margin-bottom: 5px;
  color: ${p => p.theme.colors.slightGrey};
`;

export const UserQuantity = styled.span`
  font-weight: 500;
`;
