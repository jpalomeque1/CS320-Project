import React, { useState } from 'react';
import './account.css';

function Account() {
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '',
        services: ['', '', ''],
        date: '',
    });

    const [maintenanceList, setMaintenanceList] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleChange = (e, index = null) => {
        if (index !== null) {
            const newServices = [...formData.services];
            newServices[index] = e.target.value;
            setFormData({ ...formData, services: newServices });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingIndex !== null) {
            // Update the existing record
            const updatedList = maintenanceList.map((record, index) =>
                index === editingIndex ? { ...formData } : record
            );
            setMaintenanceList(updatedList);
            setEditingIndex(null); // Reset editing index after update
        } else {
            // Add new record
            setMaintenanceList([...maintenanceList, { ...formData, id: Date.now().toString() }]);
        }
        // Reset the form
        setFormData({ make: '', model: '', year: '', services: ['', '', ''], date: '' });
    };

    const handleEdit = (index) => {
        setFormData(maintenanceList[index]); // Set form data to the selected record
        setEditingIndex(index); // Set the index of the record being edited
    };

    const handleDelete = (index) => {
        const updatedList = maintenanceList.filter((_, idx) => idx !== index); // Remove the record
        setMaintenanceList(updatedList);
    };

    return (
        <div className="account-container">
            <div className="form-section">
                <h2>New Maintenance Record</h2>
                <form onSubmit={handleSubmit}>
                    <label>Date:</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required /><br />
                    <label>Make:</label>
                    <input type="text" name="make" value={formData.make} onChange={handleChange} required /><br />
                    <label>Model:</label>
                    <input type="text" name="model" value={formData.model} onChange={handleChange} required /><br />
                    <label>Year:</label>
                    <input type="text" name="year" value={formData.year} onChange={handleChange} required /><br />
                    {formData.services.map((service, index) => (
                        <div key={index}>
                            <label>Service {index + 1}:</label>
                            <input type="text" value={service} onChange={(e) => handleChange(e, index)} />
                        </div>
                    ))}
                    <button type="submit">{editingIndex !== null ? 'Update' : 'Submit'}</button>
                </form>
            </div>
            <div className="records-section">
                <h2>Previous Maintenance Records</h2>
                <ul>
                    {maintenanceList.map((record, index) => (
                        <li key={index}>
                            {record.date} - {record.year} {record.make} {record.model}: {record.services.join(', ')}
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Account;
