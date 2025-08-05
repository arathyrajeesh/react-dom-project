import '../styles/spending.css'
import {spendingData} from '../data/spending'
import SpendingCard from './SpendingCard'


const Spending = () => {

    return(
        <section>
            <div className='container'>
                <div className='spending'>
                    <div>
                        <img src="/images/spending.png" />
                    </div>
                    <div className='spending-content'>
                    <SpendingCard data={spendingData[0]}/>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Spending