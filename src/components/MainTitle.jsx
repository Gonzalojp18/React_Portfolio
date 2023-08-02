import './MainTitle.css'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive';

const MainTitle = () =>{

    const Mobile = useMediaQuery({ query: '(min-width: 360px) and (max-width: 767px)' });
    const Tablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 991px)' });

    return (
        <section className='nameContainer'>
            <p className='soy'>SOY</p>
            {Mobile && <h2 className="initials">GP Dev</h2>}
            {Tablet && <h2 className="initials">Gonza P Dev</h2>}
            {!Mobile && !Tablet && <div className="fullName">Gonzalo Palomo Dev</div>}
            <Subtitle>Un creativo desarrollador Font-End UX. Estoy en constante crecimiento. Mi objetivo es transformar ideas en productos y experiencias sorpendentes. </Subtitle>
            <Available>Disponible para nuevos projectos</Available>
        </section>
    )
}

export default MainTitle

export const Subtitle = styled.div`
@media screen and (max-width: 2200px){
    font-size: 1rem;
    color: #f2f2f2;
    margin: 1rem 0 0 1%;
    max-width: 31%;
    opacity: .5;
}
@media screen and (min-width: 481px)and (max-width: 767px) {
    font-size: .8rem;
    margin: .5rem 0 0 2%;
    min-width: 50%;
}
@media screen and (min-width: 768px)and (max-width: 990px){
    font-size: 1rem;
    margin: .5rem 0 0 1%;
    min-width: 45%;
}
`

export const Available =  styled.p`
@media screen and (max-width: 2200px){
    border-radius: .2rem;
    border: 1.5px solid #048f57;
    font-size: .8rem;
    margin: 1rem 0 0 .8em;
    max-width: 25%;
    color: #f2f2f2;
    padding: .3rem;
    letter-spacing: 1.5px;
}
@media screen and (min-width: 481px)and (max-width: 767px) {
    letter-spacing: 0;
    font-size: .7rem;
    min-width: 35%;
    margin: .5rem 0 0 2%;
}
@media screen and (min-width: 768px)and (max-width: 990px){
    letter-spacing: 0;
    font-size: .8rem;
    min-width: 32%;
    margin: 1rem 0 0 1%;
}
`