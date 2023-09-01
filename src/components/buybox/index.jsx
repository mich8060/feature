import React, { useState } from 'react';
import './buybox.scss';

import Button from '../button';
import Countdown from '../countdown';
import Modal from '../modal';
import Sizes from '../sizes';

function Buybox(props){
    const [label, setLabel] = useState('Add to Cart');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const handleChange = (disabled) => {
        if(disabled){
            setLabel('Sold Out')
        }else{
            setLabel('Add to Cart');
        }
    }

    return(
        <div className="buybox">
            <div className="buybox--labels">
                Sizes
                <button onClick={openModal}>Fit &amp; Sizing</button>
                {isModalOpen && (
                    <Modal title="Fit & Sizing" closeModal={closeModal}>
                        <table>
            <tbody>
            <tr>
                <th>US Men</th>
                <th>US Women</th>
                <th>UK</th>
                <th>EU</th>
                <th>CM</th>
            </tr>

            <tr>
                <td>3.5</td>
                <td>5</td>
                <td>3</td>
                <td>35.5</td>
                <td>22.5</td>
            </tr>
            <tr>
                <td>4</td>
                <td>5.5</td>
                <td>3.5</td>
                <td>36</td>
                <td>23</td>
            </tr>
            <tr>
                <td>4.5</td>
                <td>6</td>
                <td>4</td>
                <td>36.5</td>
                <td>23.5</td>
            </tr>
            <tr>
                <td>5</td>
                <td>6.5</td>
                <td>4.5</td>
                <td>37.5</td>
                <td>23.5</td>
            </tr>
            <tr>
                <td>5.5</td>
                <td>7</td>
                <td>5</td>
                <td>38</td>
                <td>24</td>
            </tr>
            <tr>
                <td>6</td>
                <td>7.5</td>
                <td>5.5</td>
                <td>38.5</td>
                <td>24</td>
            </tr>
            <tr>
                <td>6.5</td>
                <td>8</td>
                <td>6</td>
                <td>39</td>
                <td>24.5</td>
            </tr>
            <tr>
                <td>7</td>
                <td>8.5</td>
                <td>6</td>
                <td>40</td>
                <td>25</td>
            </tr>
            <tr>
                <td>7.5</td>
                <td>9</td>
                <td>6.5</td>
                <td>40.5</td>
                <td>25.5</td>
            </tr>
            <tr>
                <td>8</td>
                <td>9.5</td>
                <td>7</td>
                <td>41</td>
                <td>26</td>
            </tr>
            <tr>
                <td>8.5</td>
                <td>10</td>
                <td>7.5</td>
                <td>42</td>
                <td>26.5</td>
            </tr>
            <tr>
                <td>9</td>
                <td>10.5</td>
                <td>8</td>
                <td>42.5</td>
                <td>27</td>
            </tr>
            <tr>
                <td>9.5</td>
                <td>11</td>
                <td>8.5</td>
                <td>43</td>
                <td>27.5</td>
            </tr>
            <tr>
                <td>10</td>
                <td>11.5</td>
                <td>9</td>
                <td>44</td>
                <td>28</td>
            </tr>
            <tr>
                <td>10.5</td>
                <td>12</td>
                <td>9.5</td>
                <td>44.5</td>
                <td>28.5</td>
            </tr>
            <tr>
                <td>11</td>
                <td>12.5</td>
                <td>10</td>
                <td>45</td>
                <td>29</td>
            </tr>
            <tr>
                <td>11.5</td>
                <td>13</td>
                <td>10.5</td>
                <td>45.5</td>
                <td>29.5</td>
            </tr>
            <tr>
                <td>12</td>
                <td>13.5</td>
                <td>11</td>
                <td>46</td>
                <td>30</td>
            </tr>
            <tr>
                <td>12.5</td>
                <td>14</td>
                <td>11.5</td>
                <td>47</td>
                <td>30.5</td>
            </tr>
            <tr>
                <td>13</td>
                <td>14.5</td>
                <td>12</td>
                <td>47.5</td>
                <td>31</td>
            </tr>
            <tr>
                <td>14</td>
                <td>15.5</td>
                <td>14</td>
                <td>48.5</td>
                <td>32</td>
            </tr>
            </tbody>
        </table>
                    </Modal>
                )}
            </div>
            <Sizes handleChange={handleChange} />
            <Button label={label} />
            <div className="buybox--receive">
                <Countdown />
            </div>
        </div>
    )
}

export default Buybox;