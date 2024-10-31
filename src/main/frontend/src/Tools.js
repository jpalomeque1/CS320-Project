import React from 'react';
import './Tools.css'; // Import the CSS file

function Tools() {
    const items = [
        { imageName: 'craftsman.jpeg', link: 'https://www.lowes.com/pd/CRAFTSMAN-159PC-Mechanics-Tool-Set/5014463527', name: 'Toolbox' },
        { imageName: 'oilpan.webp',  link: 'https://www.autozone.com/shop-and-garage-tools/oil-drain-pan/p/flotool-drain-pan-6-quart/475368_0_0?searchText=oil%20poan', name: 'Oil Pan' },
        { imageName: 'flashlight.webp', link: 'https://www.harborfreight.com/800-lumen-led-rechargeable-magnetic-handheld-foldable-slim-bar-work-light-black-59103.html', name: 'MRF' },
        { imageName: 'funnel.webp',  link: 'https://www.autozone.com/shop-and-garage-tools/funnel/p/flotool-black-18in-x-large-funnel/421152_0_0?searchText=funnel', name: 'Funnel' },
        { imageName: 'crawler.png',  link: 'https://www.harborfreight.com/300-lb-capacity-low-profile-creeper-black-57312.html?utm_source=google&utm_medium=cpc&utm_campaign=12144811130&campaignid=12144811130&utm_content=117789267518&adsetid=117789267518&product=57312&store=41&gad_source=1&gclid=Cj0KCQjwj4K5BhDYARIsAD1Ly2oubGRpgNnaWmqbgj_gdr2if-A8kSRb26HOzdpFOVl09GrMAaX8rQEaAoNdEALw_wcB', name: 'Creeper' },
        { imageName: 'impact.webp',  link: 'https://www.harborfreight.com/automotive/impact-wrenches/20v-brushless-cordless-38-in-3-speed-impact-wrench-tool-only-58446.html', name: 'Impact Wrench' },
    ];

    return (
        <div>
            <h1>Page 3 "In Progress"</h1>
            <div className="tools-container">
                {items.map((item, index) => (
                    <div key={index} className="tool-item">
                        <img src={`${item.imageName}`} alt={item.caption} className="tool-image" />
                        <p className="tool-caption">{item.caption}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="tool-link">
                            {item.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tools;
