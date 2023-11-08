import './editorial.scss';

export default function Editorial({title, image, meta, className}){
    return(
        <a href="https://www.feature.com" className={`editorial ${className}`}>
            <div className="editorial--image" style={{backgroundImage:`url(${image})`}}></div>
            <div className="editorial--text">
                <div className="editorial--title">{title}</div>
                <hr />
                <div className="editorial--meta">{meta}</div>
            </div>
        </a>
    )
}