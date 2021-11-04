import React from "react";

import Honda from "../CarImages/Honda.png";
import Mercedes from "../CarImages/Mercedes.png";
import Ford from "../CarImages/Ford.png";
import Audi from "../CarImages/Audi.png";
import Car from "../CarImages/Car.png";
import Suzuki from "../CarImages/Suzuki.png";


const Gallery = () => {
    return (
        <div>
            <div className="responsive">
            <div className="gallery">
                <a target="_blank" href="./CarImages/Mercedes.png">
                    <img
                        src={Mercedes}
                        alt="Cinque Terre"
                        width="512"
                        height="512"
                    />
                </a>
                <div className="desc"> Mercedes SUV 2017</div>
            </div>
        </div>

    <div className="responsive">
        <div className="gallery">
            <a target="_blank" href="./CarImages/Car.png">
                <img src={Car} alt="Car" width="512" height="512" />
            </a>
            <div className="desc"> BMW something 2019</div>
        </div>
    </div>

    <div className="responsive">
        <div className="gallery">
            <a target="_blank" href="./CarImages/Suzuki.png">
                <img src={Honda} alt="Suzuki " width="1312" height="897" />
            </a>
            <div className="desc">Suzuki Pattern 2020 </div>
        </div>
    </div>

    <div className="responsive">
        <div className="gallery">
            <a target="_blank" href="./CarImages/Ford.png">
                <img
                    src={Ford}
                    alt="Ford Focus 2016"
                    width="512"
                    height="512"
                />
            </a>
            <div className="desc">Ford Focus 2016</div>
        </div>
    </div>
        </div>

    );
};

export default Gallery;