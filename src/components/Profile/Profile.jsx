import {
  Description,
  ProfileContainer,
  ProfileItem,
  ProfileList,
  UserLabel,
  UserQuantity,
  ProfileImage,
  UserName,
  UserTag,
  UserLocation,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileContainer>
      <Description>
        <ProfileImage
          src={avatar}
          alt="User avatar"
          width="100px"
          height="100px"
        />
        <UserName>{username}</UserName>
        <UserTag>{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <ProfileList className="stats">
        {Object.entries(stats).map((key, index) => {
          return (
            <ProfileItem key={index}>
              <UserLabel>{key[0]}</UserLabel>
              <UserQuantity>{key[1]}</UserQuantity>
            </ProfileItem>
          );
        })}
      </ProfileList>
    </ProfileContainer>
  );
};
