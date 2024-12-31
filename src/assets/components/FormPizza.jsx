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
	    };		     const incrementQuantity = () => {
		setData((prevData) => ({ ...prevData, quantity: prevData.quantity + 1 }));
	    };
	  
	    const decrementQuantity = () => {
		setData((prevData) => ({ ...prevData, quantity: Math.max(1, prevData.quantity - 1) }));
	    };
	  
	    const choose = data.ingredients.length * 5 * data.quantity;
	    const total = data.quantity * 85.5 + choose;
	  
	    const validateForm = (updatedData) => {
		const errors = {};
		if (updatedData.name.length < 3) {
			errors.name = errorMessage.name;
		    }
		    if (!updatedData.size) {
			errors.size = errorMessage.size;
		    }
		    if (!updatedData.dough) {
			errors.dough = errorMessage.dough;
		    }
		    if (updatedData.ingredients.length < 5 || updatedData.ingredients.length > 8) {
			errors.ingredients = errorMessage.ingredients;
		    }
		    setFormErrors(errors);
		    setIsFormValid(Object.keys(errors).length === 0);
		  };
		
		  useEffect(() => {
		    validateForm(data);
		  }, [data]);
		
		  const handleSubmit = (event) => {
		    event.preventDefault();
		    if (!isFormValid) {
			toast.error('Lütfen tüm alanları doğru şekilde doldurun.');
			return;
		    }
		    axios

		// axios.post('https://reqres.in/api/pizza', data)
		    .post('https://reqres.in/api/pizza', data)
		    .then((response) => {
			console.log('Sipariş Başarılı:', response.data);
			history.push('/success', { orderData: response.data, formData: data });
		    })
		    .catch((error) => {
			toast.error('Sipariş Hatası:', error);
		    });
		};
	    
		// Form component from reactstrap
		return (
		  <div className="FormPizza">
			
		    <Form onSubmit={handleSubmit} className="form-pizza">
			<div className="form-group-name">
			  <Label htmlFor="name">Pizza kim için hazırlanıyor?</Label>
			  <Input
			    type="text"
			    name="name"
			    id="name"
			    value={data.name}
			    placeholder="İsim Soyisim"
			    onChange={handleInputChange}
			    invalid={!!formErrors.name}
			  />
			  <FormFeedback>{formErrors.name}</FormFeedback>
			</div>
	    
			*/ Radio buttons for size options */
			<div className="row-size-dough">
			  <div className="form-group size-options">
			    <Label>Boyut Seçiniz</Label>
			    <div className="row-size">
				{['S', 'M', 'L'].map((size) => (
				  <div key={size}>
				    <Input
					type="radio"
					name="size"
					value={size}
					checked={data.size === size}
					onChange={handleInputChange}
				    />
				    <Label>{size}</Label>
				  </div>
				))}
			    </div>
			    {formErrors.size && <FormFeedback>{formErrors.size}</FormFeedback>}
			  </div>
	    
			  <div className="form-group-dough">
			    <Label>Hamur Seçiniz</Label>
			    <Input
				type="select"
				name="dough"
				value={data.dough}
				onChange={handleInputChange}
			    >
				<option value="">Hamur Kalınlığı</option>
				{['Kalın', 'Orta', 'İnce', 'Süper İnce'].map((dough) => (
				  <option key={dough} value={dough}>
				    {dough}
				  </option>
				))}
			    </Input>
			    {formErrors.dough && <FormFeedback>{formErrors.dough}</FormFeedback>}
			  </div>
			</div>
	    
			<div className="form-group ingredient-options">
			  <Label>Malzeme Seçiniz</Label>
			  {['Pepperoni', 'Tavuk Izgara', 'Mısır', 'Sarımsak', 'Ananas'].map((ingredient) => (
			    <div key={ingredient}>
				<Input
				  type="checkbox"
				  name="ingredients"
				  value={ingredient}
				  checked={data.ingredients.includes(ingredient)}
				  onChange={handleCheckboxChange}
				/>
				<Label>{ingredient}</Label>
			    </div>
			  ))}
			  {formErrors.ingredients && <FormFeedback>{formErrors.ingredients}</FormFeedback>}
			</div>
	    
			<div className="form-group-note">
			  <Label htmlFor="note">Sipariş Notu</Label>
			  <Input
			    type="textarea"
			    name="note"
			    value={data.note}
			    onChange={handleInputChange}
			  />
			</div>
	    
			<FormGroup className="price">
			  <div className="form-group quantity">
			    <button onClick={decrementQuantity}>-</button>
			    <span>{data.quantity}</span>
			    <button onClick={incrementQuantity}>+</button>
			  </div>
	    
			  <div className="order-summary">
			    <p>Seçimler:</p>
			    <span>{choose}₺</span>
			    <p>Toplam:</p>
			    <span>{total}₺</span>
	    
			    <button type="submit" disabled={!isFormValid}>
				Siparişi Tamamla
			    </button>
			  </div>
			</FormGroup>
		    </Form>
		    <ToastContainer />
		  </div>
		);
	    }
							