import './catalog.scss';

import Header from '../../components/header/'
import Listing from '../../components/listing';

export default function Catalog(){
    return(
        <div className="page--catalog">
            <Header />
            <Listing />
        </div>
    )
}