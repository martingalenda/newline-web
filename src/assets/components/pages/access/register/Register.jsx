import data from '../../../data/data.js';
import Reg1Step from './Reg1Step.jsx';

const Register = () => {

    const regs = data.register;

    return(
        <section className="register access wow animate__fadeIn" data-wow-duration="3.5s">
            <div className="access__container">
                <h2 className="access__title">{regs.title}</h2>
                <Reg1Step/>
            </div>
        </section>
    );

}

export default Register;