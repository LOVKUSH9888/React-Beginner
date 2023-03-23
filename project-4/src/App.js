import logo from './logo.svg';
import './App.css';
import Subsciptions from './Components/Subscriptions';

function App() {
  let subscriptions=[
    {
       id:"1",
       date:(new Date('2021','03','23')),
       title:"Monthly Subscription",
       amount:"125.60"
    },
    {
      id:"2",
      date:(new Date('2020','06','28')),
      title:"Annual Subscription",
      amount:"1125.00"
   },
   {
    id:"3",
    date:(new Date('2021','09','05')),
    title:"Quarterly Subscription",
    amount:"425.50"
 }
]
  return (
      <>
        <Subsciptions date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount}/>
        <Subsciptions date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount}/>
        <Subsciptions date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount}/>
      </>
  );
}

export default App;
