const Header = (props) => {
    let x = ''
    if (props.number) {
         x = props.number
    } else {
         x = 'Nao tem um numero'
    }
    console.log(x)
    return (
        <div>
            <p>Hello World!!</p>
            <p>{props.text}</p>
            <p>{props.paragraph}</p>
        </div>
    )
}

export default Header