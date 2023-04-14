import './App.css';
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Shop from "./components/shop/Shop";

function App() {
    return (
        <div style={{width: '85%', margin: '5px auto 0'}}>
            <Header/>
            <Banner/>
            <Shop />
        </div>
    );
}

export default App;
