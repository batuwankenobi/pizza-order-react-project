import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Assent from "./pages/Assent";

// Uygulama bileşeni
function App() {

  return (
    // Router, sayfa yönlendirmelerini sağlamak için kullanılır
    <Router>
      {/* Switch, her bir Route'un yalnızca bir kez çalışmasını sağlar */}
      <Switch>
        {/* Ana sayfa için yönlendirme */}
        <Route exact path="/"><Home /></Route>
        {/* Sipariş sayfası için yönlendirme */}
        <Route path="/order"><Order /></Route>
        {/* Başarılı işlem sonrası gösterilecek sayfa için yönlendirme */}
        <Route path="/success"><Assent /></Route>
      </Switch>
    </Router>
  )
}

export default App; // Uygulamayı dışarıya aktarır
