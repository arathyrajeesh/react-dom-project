const SpendingCard = (props) => {

    const {data}=props
    return(
        <div className='spending-content'>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
        </div>
    )
}

export default SpendingCard