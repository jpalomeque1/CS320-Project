import React from 'react';
import './DIY.css';
import {useNavigate} from 'react-router-dom';

function DIY() {
    const navigate = useNavigate();

    return (
        <div className="diy-container">
            <h1>Page 2 "In Progress"</h1>
            <div className="video-container">
                <iframe
                    width="100%"
                    height="630"  // Set to double the previous height (315)
                    src="https://www.youtube.com/embed/brofphmC7GI?autoplay=1&loop=1&playlist=brofphmC7GI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>

            </div>
            <button onClick={() => navigate('/account')}>Login</button>
            <div className="maintenance-log">
                <div className="log-template">
                    <h2>Car Maintenance Log Template</h2>
                    <table>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Mileage</th>
                            <th>Service/Check</th>
                            <th>Description & Notes</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Oil Change</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Tire Rotation</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Brake Inspection</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Battery Check</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Air Filter Replacement</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Coolant Level Check</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Transmission Fluid</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Spark Plug Replacement</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Timing Belt</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Wiper Blade Replacement</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Lights Inspection</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Fluid Levels</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Suspension & Steering Check</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Exhaust System Check</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Alignment Check</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Fuel System Cleaning</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="service-guidelines">
                    <h2>Guidelines for Each Service</h2>
                    <ul>
                        <li>Oil Change: Every 5,000 - 7,500 miles.</li>
                        <li>Tire Rotation: Every 5,000 - 10,000 miles.</li>
                        <li>Brake Inspection: Every 10,000 - 15,000 miles.</li>
                        <li>Battery Check: Annually or as needed.</li>
                        <li>Air Filter Replacement: Every 15,000 - 30,000 miles.</li>
                        <li>Coolant Level Check: Every oil change or monthly.</li>
                        <li>Transmission Fluid: Every 30,000 - 60,000 miles.</li>
                        <li>Spark Plug Replacement: Every 30,000 - 100,000 miles.</li>
                        <li>Timing Belt: Replace every 60,000 - 100,000 miles.</li>
                        <li>Wiper Blades Replacement: Annually or as needed.</li>
                        <li>Lights Inspection: Every oil change.</li>
                        <li>Fluid Levels: Monthly check or at each oil change.</li>
                        <li>Suspension & Steering Check: Every 15,000 - 30,000 miles.</li>
                        <li>Exhaust System Check: Every 30,000 miles.</li>
                        <li>Alignment Check: Annually or if vehicle pulls to one side.</li>
                        <li>Fuel System Cleaning: Every 15,000 miles.</li>
                    </ul>
                </div>
            </div>
            <div className="additional-notes">
                <h2>Additional Notes</h2>
                <p>• Date: Record the date each service is completed.</p>
                <p>• Mileage: Log the mileage at the time of service.</p>
                <p>• Description & Notes: Include details or concerns identified.</p>
            </div>
        </div>
    );
}

export default DIY;
