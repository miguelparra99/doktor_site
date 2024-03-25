import React, { Fragment, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar.js'
import Scrollbar from '../../components/scrollbar/scrollbar.js'
import Footer from '../../components/footer/Footer.js'
import Exams from '../../components/Exams/Exams.js';
import subExamenes from '../../api/subExamenes.json'

const TeamPage = (props) => {

    const[selectedExams, setSelectedExams] = useState([])
    const[total, setTotal] = useState(0)

    useEffect(() => {
        const totalValor = selectedExams.reduce((acc, [nombre, valor]) => acc + valor, 0);
        setTotal(totalValor);
    }, [selectedExams]);

    const handleSelect = (isSelect, data) =>{
        if (isSelect) {
            const parcial = [...selectedExams, data]
            setSelectedExams(parcial)
        } else {
            const parcial = selectedExams.filter(examen => examen !== data);
            setSelectedExams(parcial);
        }
    }

    const handleClick = () =>{
        if(total > 0){
            const objOutput = {"Total":total,"Items":selectedExams}
            console.log(objOutput)
        }
    }

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'} />
            <h2 className="row align-items-center justify-content-center mt-5">Cotiza tus exámenes</h2>
            <h3 className="row align-items-center justify-content-center mt-4">${total}</h3>
            <div className="d-grid col-4 mx-auto mt-4 mb-3">
                <button onClick={handleClick} type="submit" className="theme-btn">Imprimir Cotización</button>
            </div>
            <div className='row mx-3 my-5'>
                {Object.keys(subExamenes).map((clave, index) => (
                    <Exams 
                        key = {index} 
                        subName = {clave} 
                        datos = {subExamenes[clave]} 
                        handleSelect={handleSelect}
                    />
                ))}
            </div>
            <Footer footerClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default TeamPage;
