import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';


export const App = () => {
  return (
    <>
      <Profile /> 
      <Statistics />
      <FriendList />
      <TransactionHistory/>
    </>
  );
};
