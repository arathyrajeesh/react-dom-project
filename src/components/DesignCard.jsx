const DesignCard = (props) => {

    const {data}=props
    
    return(
        <div className='design-content'>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
        </div>
    )
}

export default DesignCard