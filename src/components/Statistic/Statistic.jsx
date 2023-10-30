import {
  StatiscticItem,
  StatisticLabel,
  StatisticPercentage,
  StatisticSection,
  StatysticListContainer,
  StatysticText,
} from './Statistic.styled';

export const Statistic = ({ title, stats }) => {
  const renderTitle = title ? (
    <StatysticText className="title">{title}</StatysticText>
  ) : null;

  return (
    <StatisticSection>
      {renderTitle}
      <StatysticListContainer>
        {stats.map(({ id, label, percentage }) => (
          <StatiscticItem key={id} $label={label}>
            <StatisticLabel>{label}</StatisticLabel>
            <StatisticPercentage>{percentage}%</StatisticPercentage>
          </StatiscticItem>
        ))}
      </StatysticListContainer>
    </StatisticSection>
  );
};
