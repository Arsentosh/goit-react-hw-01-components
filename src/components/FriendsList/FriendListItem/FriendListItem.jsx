import {
  FriendIsOnline,
  FriendItem,
  FriendName,
} from './FriendListItem.styled';

export const FriendsItems = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendIsOnline $isOnline={isOnline}></FriendIsOnline>
      <img src={avatar} alt="User avatar" width="48" height="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};
