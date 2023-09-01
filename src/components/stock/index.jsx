import './stock.scss';

function Stock(props){
    return(
        <div className="stock">
            <strong>Now in Stock:</strong> Available at the following locations
            <ul>
                <li>Scottsdale</li>
                <li>Chinatown</li>
                <li>Wynn Las Vagas</li>
                <li>Calabasas</li>
            </ul>
        </div>
    )
}

export default Stock;