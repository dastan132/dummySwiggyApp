const CardDetails = ({image, title, rating, location }) => {
    return (
        <>
<div>{image}</div>
<div>{title}</div>
<div>{rating}</div>
<div>{location}</div>
        </>
    )
}

export default CardDetails