import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContainerHeader } from "./Components/Header/ContainerHeader";
import  {ContainerPageProduct} from "./Components/Page Product/ContainerPageProduct";
import { ContainerBasket } from "./Components/Basket/ContainerBasket";
import { ContainerMainPage } from './Components/MainPage/ContainerMainPage';
import { ContainerReviews } from './Components/Reviews/ContainerReviews';
import { ContainerRegistration } from './Components/Registration/ContainerRegistration'


function App() {
  return (
    <BrowserRouter>
        <div className="App">
              <ContainerHeader />
            <Routes>
                <Route  path={'/'} element={< ContainerMainPage />} /> 
                <Route  path={'/account/*'} element={< ContainerRegistration />} />
                <Route  path={'/basket/*'} element={< ContainerBasket />} />
                <Route  path={'/product/:productId'} element={< ContainerPageProduct />} />
                <Route  path={'/review/:productId'} element={< ContainerReviews />} />
                
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
