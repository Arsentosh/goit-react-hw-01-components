import styled from 'styled-components';

export const StatisticSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  background-color: ${p => p.theme.colors.white};
`;

export const StatysticText = styled.h2`
  margin: 30px 0 30px 0;
  background-color: ${p => p.theme.colors.white};
`;

const getBGColor = props => {
  switch (props.$label) {
    case '.docx':
      return props.theme.colors.deepSkyBlue;
    case '.pdf':
      return props.theme.colors.darkViolet;
    case '.mp3':
      return props.theme.colors.red;
    case '.psd':
      return props.theme.colors.lightSkyBlue;
    default:
      return props.theme.colors.black;
  }
};

export const StatysticListContainer = styled.ul`
  display: flex;
  width: 400px;
`;

export const StatiscticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: ${getBGColor};
`;

export const StatisticLabel = styled.span`
  color: ${p => p.theme.colors.white};
  margin-bottom: 5px;
`;

export const StatisticPercentage = styled.span`
  font-size: 20px;
  color: ${p => p.theme.colors.white};
`;
