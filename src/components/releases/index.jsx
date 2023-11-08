import './releases.scss';

export default function Releases({brand, title, image, meta, className}){
    return(
        <a href="https://www.feature.com" className={`releases ${className}`}>
            <div className="releases--image" style={{backgroundImage:`url(${image})`}}></div>
            <div className="releases--text">
                <div className="releases--brand">{brand}</div>
                <div className="releases--title">{title}</div>
                <div className="releases--meta">{meta}</div>
            </div>
        </a>
    )
}