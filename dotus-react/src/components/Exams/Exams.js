const Exams = ({subName, datos, handleSelect}) => {

    return(
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="clExams">
                <h5 className="clhead text-center py-1">{subName}</h5>
                <div className="row row-margins px-2 py-1">
                    <div className="col-md-12">
                        <div className="row px-3">
                            {datos.map((examen, index) => (
                                <div key={index}>
                                    <input type="checkbox" id={`checkbox-${examen[0]}-${index}`} onChange={(event) => handleSelect(event.target.checked, examen)} className="mx-2"/>
                                    <label htmlFor={`checkbox-${examen[0]}-${index}`}>{examen[0]} - ${examen[1]}</label>                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Exams;