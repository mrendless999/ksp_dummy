// IncidentReportingApp.js

import React, { useState } from 'react';
import './IncidentReportingApp.css'; // Import CSS for styling

const IncidentReportingApp = () => {
  // Define state variables
  const [incidents, setIncidents] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    dateTime: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to submit incident report
  const submitIncident = (e) => {
    e.preventDefault();
    const newIncident = {
      id: incidents.length + 1,
      title: formData.title,
      description: formData.description,
      location: formData.location,
      dateTime: formData.dateTime,
    };
    setIncidents([...incidents, newIncident]);
    setFormData({
      title: '',
      description: '',
      location: '',
      dateTime: '',
    });
  };

  return (
    <div className="incident-reporting-app-container">
      <h1 className="incident-reporting-app-title">Incident Reporting System</h1>
      <form className="incident-reporting-app-form" onSubmit={submitIncident}>
        <label className="incident-reporting-app-label" htmlFor="title">Title:</label>
        <input className="incident-reporting-app-input" type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} required /><br />
        <label className="incident-reporting-app-label" htmlFor="description">Description:</label>
        <textarea className="incident-reporting-app-textarea" id="description" name="description" value={formData.description} onChange={handleInputChange} required /><br />
        <label className="incident-reporting-app-label" htmlFor="location">Location:</label>
        <input className="incident-reporting-app-input" type="text" id="location" name="location" value={formData.location} onChange={handleInputChange} required /><br />
        <label className="incident-reporting-app-label" htmlFor="dateTime">Date/Time:</label>
        <input className="incident-reporting-app-datetime-input" type="datetime-local" id="dateTime" name="dateTime" value={formData.dateTime} onChange={handleInputChange} required /><br />
        <button className="incident-reporting-app-button" type="submit">Submit</button>
      </form>
      <h2>Incident Reports:</h2>
      <ul className="incident-reporting-app-ul">
        {incidents.map(incident => (
          <li className="incident-reporting-app-li" key={incident.id}>
            <strong className="incident-reporting-app-strong">{incident.title}</strong> - {incident.description}<br />
            Location: {incident.location}<br />
            Date/Time: {incident.dateTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncidentReportingApp;
