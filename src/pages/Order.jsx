import FormPizza from "../Components/FormPizza.jsx";  // veya .js

import OrderHeader from "../components/OrderHeader";
import Footer from "../components/Footer";

export default function Order() {
  return (
    <>
      <OrderHeader />
      <FormPizza />
      <Footer />
    </>
  );
}


