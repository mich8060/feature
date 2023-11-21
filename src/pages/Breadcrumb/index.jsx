import './breadcrumb.scss';

import Breadcrumb from '../../components/breadcrumb';

export default function PageBreadcrumb(){
    return(
        <div className="page--breadcrumb">
            <Breadcrumb>
                <ul>
                    <li><a href="https://feature.com/">Link</a></li>
                    <li><a href="https://feature.com/">Link</a></li>
                    <li><a href="https://feature.com/">Link</a></li>
                    <li><a href="https://feature.com/">Link</a></li>
                    <li><a href="https://feature.com/">Link</a></li>
                </ul>
            </Breadcrumb>
        </div>
    )
}