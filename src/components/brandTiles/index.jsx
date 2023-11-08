import './brandtiles.scss'

export default function BrandTiles({image, title}){
    return(
        <div className="brandtiles">
            <div className="brandtiles--image" style={{backgroundImage:`url(${image})`}}>
            </div>
            <div className="brandtiles--text">
                {title}
            </div>
        </div>
    )
}