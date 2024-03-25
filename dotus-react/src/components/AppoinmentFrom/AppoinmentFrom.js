import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AppoinmentFrom = () => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        selectedDate: new Date()
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const [isSubmitted, setIsSubmitted] = useState(false);

    const changeHandler = e => {
        const { name, value } = e.target;
        setForms({ ...forms, [name]: value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const handleChange = date => {
        setForms({ ...forms, selectedDate: date });
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                phone: '',
                company: ''
            });
            setIsSubmitted(true);
        } else {
            validator.showMessages();
        }
    };

    if (isSubmitted) {
        return (
            <div className="submit-success-message">
                <h2>Formulario enviado correctamente!</h2>
                <p>Gracias por su solicitud de cita. Nos pondremos en contacto con usted en breve.</p>
            </div>
        );
    }
    return (
        <form method="post" className="contact-validation-active" onSubmit={(e) => submitHandler(e)}>
            <div className="row">
                <div className="form-field col-lg-6">
                    <input
                        value={forms.name}
                        type="text"
                        name="name"
                        className="form-control-name"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder="Nombre Completo" />
                    {validator.message('name', forms.name, 'required|alpha_space')}
                </div>
                <div className="form-field col-lg-6">
                    <input
                        value={forms.email}
                        type="email"
                        className="form-control-mail"
                        name="email"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        placeholder="Correo Electrónico" />
                    {validator.message('email', forms.email, 'required|email')}
                </div>
                <div className="form-field col-lg-6">
                            <input
                                value={forms.phone}
                                type="phone"
                                name="phone"
                                className="form-controls form-control-number "
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Número de Teléfono" />
                            {validator.message('phone', forms.phone, 'required|phone')}
                </div>
                <div className="form-field col-lg-6">
                    <DatePicker
                        selected={forms.selectedDate}
                        onChange={handleChange}
                        className="form-control-name"
                        placeholderText="Selecciona una fecha"
                    />
                </div>   

                    <div className="col-xl-12 col-lg-12 col-12">
                        <div className="submit-area">
                            <button type="submit" className="theme-btn">Agendar Cotización</button>
                        </div>
                    </div>
            </div>
        </form>
    )
}

export default AppoinmentFrom;
