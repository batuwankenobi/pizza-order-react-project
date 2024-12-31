// Order component, which is responsible for rendering the order page layout
import FormPizza from "../components/FormPizza";  // Import the pizza form component
import OrderHeader from "../components/OrderHeader";  // Import the order header component
import Footers from '../components/Footer';  // Import the footer component

// The Order component
export default function Order () {
    return (
        <>
        {/* Render the OrderHeader component */}
        <OrderHeader/>

        {/* Render the FormPizza component to allow users to customize their pizza order */}
        <FormPizza />

        {/* Render the Footer component */}
        <Footers/>
        </>
    )
}
