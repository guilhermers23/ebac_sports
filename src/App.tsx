import { useState } from 'react';
import Header from './components/Header';
import Produtos from './containers/Produtos';

import { Provider } from 'react-redux';
import { store } from './store';
import { GlobalStyle } from './styles';

export type Produto = {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
};

const App = () => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  //Redux feito em carrinho
  function favoritar(produto: Produto) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id);
      setFavoritos(favoritosSemProduto);
    } else {
      setFavoritos([...favoritos, produto]);
    }
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} />
        <Produtos favoritos={favoritos} favoritar={favoritar} />
      </div>
    </Provider>
  );
};

export default App;
