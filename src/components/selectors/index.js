import './selectors.scss';

function Selectors(props){

    return(
        <div className="selector">
            <input type="radio" name="sizes" id={`sizebox--${props.data}`} />
            <label 
                className={`selector--button ${props.disabled ? 'disabled' : ''}`}
                htmlFor={`sizebox--${props.data}`}
                onClick={() => props.handleChange(props.disabled)}
            >
                {props.disabled &&
                    <>
                        <div className="selector--notify">
                            <svg width="11" height="13" fill="currentColor" viewBox="0 0 11 13" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.84732 12.3799C5.27589 12.3799 4.73875 12.157 4.33303 11.7513C3.92732 11.3456 3.70446 10.8085 3.70446 10.237H1.71018C1.31018 10.237 0.955889 10.0199 0.790175 9.67131C0.630175 9.33988 0.681604 8.95131 0.915889 8.6656L1.04732 8.5056C1.63589 7.79131 1.99589 7.36274 1.99589 5.3456C1.99589 3.51131 2.72732 2.32274 4.2416 1.69988C4.48732 0.911311 5.12732 0.379883 5.84732 0.379883C6.56732 0.379883 7.20732 0.905597 7.4416 1.68845C8.96732 2.31703 9.70446 3.51131 9.70446 5.33988C9.70446 7.35703 10.0587 7.79131 10.653 8.49988L10.7845 8.65988C11.0187 8.9456 11.0645 9.33417 10.9102 9.6656C10.7445 10.0142 10.3959 10.2313 9.99589 10.2313H8.0016C8.0016 10.8027 7.77875 11.3399 7.37303 11.7456C6.96732 12.1513 6.43017 12.3742 5.85875 12.3742L5.84732 12.3799ZM4.5616 10.237C4.5616 10.5799 4.69303 10.9056 4.93875 11.1456C5.41875 11.6256 6.27589 11.6256 6.75589 11.1456C6.99589 10.9056 7.13303 10.5799 7.13303 10.237H4.5616ZM5.84732 1.23703C5.45875 1.23703 5.17875 1.5856 5.0816 1.93417C5.01303 2.17988 4.81303 2.39131 4.56732 2.49417C3.76732 2.8256 2.85303 3.44274 2.85303 5.35131C2.85303 7.67703 2.35018 8.28845 1.71018 9.05988L1.58446 9.21417C1.58446 9.21417 1.54446 9.25988 1.57303 9.31131C1.58446 9.33988 1.62446 9.3856 1.71589 9.3856H9.99018C10.0816 9.3856 10.1159 9.33988 10.133 9.31131C10.1559 9.25988 10.133 9.2256 10.1216 9.21417L9.99589 9.05988C9.35589 8.28845 8.85303 7.67703 8.85303 5.35131C8.85303 3.44845 7.93875 2.8256 7.13875 2.49417C6.89303 2.39131 6.69303 2.17988 6.62446 1.93417C6.5216 1.59131 6.24732 1.23703 5.85303 1.23703H5.84732Z" />
                            </svg>
                        </div>
                        <div className="selector--tooltip">
                            <span>Notify me!</span>
                        </div>
                    </>
                }
                {props.label}
            </label>
        </div>
    )
}

export default Selectors;