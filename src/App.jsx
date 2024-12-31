import "./App.css";
import { useState, useEffect } from "react";
import SiparisFormu from "./Components/siparisFormu";
import Main from "./Components/Main";
import SiparisOnayi from "./Components/SiparisOnayi";
import { Header } from "./Components/Header";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { puan } from "./Components/secenekler";
function App() {
  const [formData, setFormData] = useState({
    fiyat: 85.5,
    boySecim: "",
    kalinlikSecim: "",
    secimler: [],
    siparisNotu: "",
    total: 85.5,
    npmHizindaTeslimat: false,
    pizzaSecim: puan.isim,
  });

  const [count, setCount] = useState(1);

  useEffect(() => {
    const toplam =
      formData.fiyat * count +
      formData.secimler.length * 5 * count +
      (formData.npmHizindaTeslimat === true ? +50 : 0);
    setFormData((prevData) => ({
      ...prevData,
      total: toplam,
    }));
  }, [formData.fiyat, count, formData.secimler]);

  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="bg-main">
        <header className="container-md header flex-col gap-s barlow reset-padding">
          <Header />
        </header>

        <main>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/siparisFormu">
              <nav className="container-md flex header gap-s barlow reset-padding">
                <NavLink
                  to="/"
                  className={(isActive) =>
                    "header-link semi-bold" + (!isActive ? " unselected" : "")
                  }
                >
                  Ana Sayfa
                </NavLink>

                <NavLink
                  to="/siparisFormu"
                  className={(isActive) =>
                    "header-link semi-bold" +
                    (!isActive ? " header-link semi-bold" : "semi-bold")
                  }
                >
                  Sipariş Formu
                </NavLink>
              </nav>

              <SiparisFormu
                formData={formData}
                setFormData={setFormData}
                count={count}
                setCount={setCount}
              />
            </Route>

            <Route path="/siparis-onayi">
              <SiparisOnayi formData={formData} count={count} />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;