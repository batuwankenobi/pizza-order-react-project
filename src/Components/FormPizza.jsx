import { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import axios from 'axios';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./FormPizza.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function FormPizza() {

    // Hata mesajları için nesne
    const errorMessage = {
        name: "İsim 3 karakterden az olamaz.",
        size: "Lütfen boyut seçiniz.",
        dough: "Lütfen hamur kalınlığını seçiniz.",
        ingredients: "Malzeme seçiminiz en az 4, en çok 10 olmalıdır."
    };

    // Form verilerini başlatma
    const formData = {
        name: "",
        size: { value: "", options: ["S", "M", "L"] },
        dough: { value: "", options: ["Kalın", "Orta", "İnce", "Süper İnce"] },
        ingredients: {
            value: [],
            options: ['Pepperoni', 'Tavuk Izgara', 'Mısır', 'Sarımsak',
                'Ananas', 'Sosis', 'Soğan', 'Sucuk', 'Biber',
                'Kabak', 'Kanada Jambonu', 'Domates', 'Jalepeno', 'Kavurma']
        },
        note: "",
        quantity: 1
    };

    // React state'leri
    const [data, setData] = useState(formData);
    const [formErrors, setFormErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const history = useHistory();

    // Seçim değişikliklerini işleme fonksiyonu
    const handleSelectChange = (event) => {
        const { name, value } = event.target;
        const updatedData = { ...data, [name]: { ...data[name], value } };
        setData(updatedData);
    };

    // Checkbox değişikliklerini işleme fonksiyonu
    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        const updatedIngredients = checked
            ? [...data.ingredients.value, value]
            : data.ingredients.value.filter((ingredient) => ingredient !== value);

        const updatedData = { ...data, ingredients: { ...data.ingredients, value: updatedIngredients } };
        setData(updatedData);
    };

    // Genel input değişikliklerini işleme fonksiyonu
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedData = { ...data, [name]: value };
        setData(updatedData);
    };

    // Adet artırma fonksiyonu
    const incrementQuantity = () => {
        setData((prevData) => ({
            ...prevData,
            quantity: prevData.quantity + 1,
        }));
    };

    // Adet azaltma fonksiyonu
    const decrementQuantity = () => {
        setData((prevData) => ({
            ...prevData,
            quantity: Math.max(1, prevData.quantity - 1),
        }));
    };

    // Seçim fiyat hesaplama
    const choose = (data.ingredients.value.length * 5) * data.quantity;
    const total = data.quantity * 85.50 + choose;

    // Form doğrulama fonksiyonu
    const validateForm = (updatedData) => {
        const errors = {};

        if (updatedData.name.length < 3) {
            errors.name = errorMessage.name;
        }
        if (!updatedData.size.value) {
            errors.size = errorMessage.size;
        }
        if (!updatedData.dough.value) {
            errors.dough = errorMessage.dough;
        }
        if (updatedData.ingredients.value.length < 4 || updatedData.ingredients.value.length > 10) {
            errors.ingredients = errorMessage.ingredients;
        }

        setFormErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    // State değiştikçe formu doğrulama
    useEffect(() => {
        validateForm(data);
    }, [data]);

    // Form gönderme işlemi
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isFormValid) {
            toast.error("Lütfen tüm alanları doğru şekilde doldurun.");
            return;
        }

        axios.post("https://reqres.in/api/pizza", data)
            .then((response) => {
                console.log("Sipariş Başarılı:", response.data);
                history.push("/success", { orderData: response.data, formData: data });
            })
            .catch((error) => {
                toast.error("Sipariş Hatası:", error);
            });
    };

    return (
        <div className="FormPizza">
            <Form onSubmit={handleSubmit} className="form-pizza" data-cy="form-pizza">
                {/* Isim Alani */}
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
    
                        data-cy="input-name"
                    />
                    <FormFeedback data-cy="error-name">{formErrors.name}</FormFeedback>
                </div>

                {/* Pizza Boyutu Alani */}
                <div className="row-size-dough">
                    <div className="form-group size-options" data-cy="form-group-size">
                        <p htmlFor="size">Boyut Seçiniz <span style={{ color: "red" }}>*</span></p>
                        <div className='row-size'>
                            {data.size.options.map((size) => (
                                <div key={size}>
                                    <Input
                                        name="size"
                                        type="radio"
                                        id={size}
                                        value={size}
                                        checked={data.size.value === size}
                                        onChange={(e) => { handleSelectChange(e); }}
                                        invalid={!!formErrors.size}
                                        data-cy="input-size"
                                    />
                                    <Label htmlFor={size}>{size}</Label>
                                </div>
                            ))}
                        </div>
                        {formErrors.size && (
                            <FormFeedback data-cy="error-size">{formErrors.size}</FormFeedback>
                        )}
                    </div>

                    {/* Hamur KAlinligi Alani */}
                    <div className="form-group-dough" data-cy="form-group-dough">
                        <Label htmlFor="dough">Hamur Seçiniz <span>*</span></Label>
                        <Input
                            type="select"
                            name="dough"
                            id="dough"
                            value={data.dough.value}
                            onChange={handleSelectChange}
                            invalid={!!formErrors.dough}
                            data-cy="input-dough"
                        >
                            <option value="">Hamur Kalınlığı</option>
                            {data.dough.options.map((dough, index) => (
                                <option key={index} value={dough}>
                                    {dough}
                                </option>
                            ))}
                        </Input>
                        {formErrors.dough && (
                            <FormFeedback data-cy="error-dough">{formErrors.dough}</FormFeedback>)}
                    </div>
                </div>

                {/* Malzeme Secimi Alani */}
                <div className="form-group ingredient-options" data-cy="form-group-ingredients">
                    <Label>Malzeme Seçiniz <span>*</span></Label>
                    <legend>En fazla 10 malzeme seçebilirsiniz. (5 ₺ her biri)</legend>
                    <div className="ingredient-options-box">
                        {data.ingredients.options.map((ingredient, index) => (
                            <div className='row-ingredient' key={index}>
                                <Input
                                    name="ingredients"
                                    type="checkbox"
                                    id={`ingredient-${index}`}
                                    value={ingredient}
                                    checked={data.ingredients.value.includes(ingredient)}
                                    onChange={(e) => { handleCheckboxChange(e); }}
                                    data-cy={`input-ingredient-${ingredient}`}
                                />
                                <p htmlFor={`ingredient-${index}`}>{ingredient}</p>
                            </div>
                        ))}
                    </div>
                    {formErrors.ingredients && (
                        <FormFeedback data-cy="error-ingredients">{formErrors.ingredients}</FormFeedback>)}
                </div>

                {/* Sipariş Notu Alani */}
                <div className="form-group-note" data-cy="form-group-note">
                    <Label htmlFor="note">Sipariş Notu</Label>
                    <Input
                        type="textarea"
                        id="note"
                        name="note"
                        value={data.note}
                        placeholder="Siparişine eklemek istediğin bir not var mı?"
                        onChange={handleInputChange}
                        data-cy="input-note"
                    />
                </div>

                <hr />

                {/* Sayac Alani */}
                <FormGroup className="price">
                    <div className="form-group quantity" data-cy="form-group-quantity">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                decrementQuantity();
                            }}
                            data-cy="button-decrement">-</button>
                        <span data-cy="quantity-value">{data.quantity}</span>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                incrementQuantity();
                            }}
                            data-cy="button-increment"> +</button>
                    </div>

                    {/* Sipariş Özeti Alani */}
                    <div className="form-group order-summary" data-cy="form-group-summary">
                        <p>Sipariş Toplamı</p>
                        <div className="smmry-choose">
                            <p>Seçimler:</p>
                            <span data-cy="summary-choose">{choose}₺</span>
                        </div>
                        <div className="smmry-total">
                            <p>Toplam:</p>
                            <span data-cy="summary-total">{total}₺</span>
                        </div>
                        <button
                            type="submit"
                            className="submit-button"
                            disabled={!isFormValid}
                            data-cy="button-submit">
                            Siparişi Tamamla
                        </button>
                    </div>
                </FormGroup>
            </Form>
            <ToastContainer />
        </div>
    );
}
