import user from '../json-data/user.json';
import data from '../json-data/data.json';
import friends from '../json-data/friends.json';
import transactions from '../json-data/transactions.json';
import { Statistic } from './Satistic/Statistic';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendsList/FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Container, GlobalStyle } from './GlobalStyle';

const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <Container>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transactions} />
      <GlobalStyle />
    </Container>
  );
};
