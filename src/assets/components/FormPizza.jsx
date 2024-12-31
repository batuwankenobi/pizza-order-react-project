import { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './FormPizza.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function FormPizza() {
	const errorMessage = {
	  name: "İsim 3 karakterden az olamaz.",
	  size: "Lütfen boyut seçiniz.",
	  dough: "Lütfen hamur kalınlığını seçiniz.",
	  ingredients: "Malzeme seçiminiz en az 5, en çok 8 olmalıdır.",
	};
      const formData = {
		name: '',
		size: '',
		dough: '',
		ingredients: [],
		note: '',
		quantity: 1,
	    };
	    const [data, setData] = useState(formData);
	    const [formErrors, setFormErrors] = useState({});
	    const [isFormValid, setIsFormValid] = useState(false);
	    const history = useHistory();
	  
	    const handleInputChange = (e) => {
		const { name, value } = e.target;
		setData((prevData) => ({ ...prevData, [name]: value }));
	    };
	    const handleCheckboxChange = (e) => {
		const { value, checked } = e.target;
		setData((prevData) => {
		  const updatedIngredients = checked
		    ? [...prevData.ingredients, value]
		    : prevData.ingredients.filter((ingredient) => ingredient !== value);
		  return { ...prevData, ingredients: updatedIngredients };
		});
	    };		    