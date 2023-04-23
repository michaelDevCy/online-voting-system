// Import the required dependencies
import React from 'react';
import { useParams } from 'react-router-dom';
import './CampaignDetails.css';

function CampaignDetails() {
    const { id } = useParams();
    // Add logic here to fetch campaign details using the campaign ID

    return (
        <div className="campaign-details-container">
            <h2>Campaign Details</h2>
            <p>Campaign ID: {id}</p>
        </div>
    );
}

export default CampaignDetails;

