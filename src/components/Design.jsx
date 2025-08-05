import '../styles/design.css'
import { spendingData } from '../data/spending'
import DesignCard from './DesignCard'




const Design = () => {

    return(
        <section>
        <div className='container'>
            <div className='design'>
                <div>
                    <img src="/images/design.png" />
                </div>
                <div className='design-content'>
                    {
                    <DesignCard data={spendingData[1]}/>
                }
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    </section>
    )

}

export default Design