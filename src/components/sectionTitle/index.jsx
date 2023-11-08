import './sectionTitle.scss';

export default function SectionTitle({title, more}){
    return(
        <div className="sectionTitle">
            <span>{title}</span>
            {more == "true" &&
                <a href="https://www.feature.com" className="flyout--seeall">
                    <span>See all</span>
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.82845 5L0.675207 9.15323L1.5 9.97803L6.47803 5L1.5 0.0219641L0.675206 0.846757L4.82845 5Z" fill="#010101"/>
                    </svg>
                </a>
            }
        </div>
    )
}