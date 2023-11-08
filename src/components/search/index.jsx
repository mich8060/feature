import './search.scss';

export default function Search(){
    return(
        <div className="search">
            <button>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.65379 11.7326C2.57913 9.65798 2.57913 6.29429 4.65379 4.21963C6.72845 2.14497 10.0921 2.14497 12.1668 4.21963C14.2415 6.29429 14.2415 9.65798 12.1668 11.7326C10.0921 13.8073 6.72845 13.8073 4.65379 11.7326ZM3.76991 3.33575C1.20709 5.89856 1.20709 10.0537 3.76991 12.6165C6.17363 15.0202 9.97811 15.1695 12.5557 13.0642L16.3166 16.825C16.5607 17.0691 16.9564 17.0691 17.2005 16.825C17.4446 16.581 17.4446 16.1852 17.2005 15.9412L13.4452 12.1858C15.606 9.60753 15.4745 5.75952 13.0507 3.33575C10.4879 0.77293 6.33272 0.77293 3.76991 3.33575Z" fill="#0056FF"/>
                </svg>
            </button>
            <input type="text" placeholder="Search" />
        </div>
    )
}