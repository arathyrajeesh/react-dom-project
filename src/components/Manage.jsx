import { managementData } from '../data/management'
import '../styles/manage.css'
import ManageCard from '../components/ManageCard'


const Manage = () =>{

    return(
        <section>
            <div className='container'>
                <div className='manage'>
                    <div className='manage-home'>
                        <h1>Manage your entire community in a single system</h1>
                        <p className='manage-par'>Who is Nextcent suitable for?</p>
                    </div>
                    <div className='card-container'>
                        {
                            managementData.map((item,idx) => <ManageCard data={item} key={idx}/>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Manage