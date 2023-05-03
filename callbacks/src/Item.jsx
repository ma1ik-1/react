const Item = (item, onClick) => {
    return(
        <div onClick={onClick}>
            {item}
        </div>
    )
}

export default Item