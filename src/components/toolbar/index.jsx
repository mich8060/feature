import './toolbar.scss';

export default function Toolbar({ title }){
    return(
        <div className="toolbar">
            <div className="toolbar--container">
                <div className="toolbar--title">Results: {title}</div>
            </div>
        </div>
    )
}