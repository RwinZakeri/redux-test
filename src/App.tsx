import { Provider } from "react-redux";
import NavBar from "./components/navBar";
import Card from "./components/product";
import ProductList from "./components/product-list";
import { products } from "./db/db";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <ProductList>
        {products.map((item) => (
          <Card {...item} />
        ))}
      </ProductList>
    </Provider>
  );
};

export default App;
