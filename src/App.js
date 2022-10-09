
import './App.css';
import Barchart from './components/Barchart';
import Cards from './components/Cards';
import DoughnutBar from './components/Doughnut';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      {/* <Sidebar />   */}
      {/* <DoughnutBar /> */}
      {/* <Barchart /> */}
     
       <Cards header="Average PR Size"
        value1={968}
        value2={240}
        text1={"lines"}
        text2={"kb"}
        icon={true}
        text3={"Line Change"}
        text4={ "Size"}
        icon__Text={ "24%" } />
          <Cards header="Average Ticket Duration"
        value1={36}
        text1={"hours"}
        icon={false}
        text3={"Hours Worked"}
        icon__Text={"79%"} />
    </div>
  );
}

export default App;
