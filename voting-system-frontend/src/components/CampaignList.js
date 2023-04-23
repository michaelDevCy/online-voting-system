// Import hooks and API function
import React, { useState, useEffect } from 'react';
import { fetchCampaigns } from '../api';
import './CampaignList.css';

// Add the 'CampaignList' component logic
function CampaignList() {
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        const getCampaigns = async () => {
            try {
                const data = await fetchCampaigns();
                setCampaigns(data);
            } catch (error) {
                console.error('Error fetching campaigns:', error);
            }
        };

        getCampaigns();
    }, []);

    return (
        <div className="campaign-list-container">
            <h2>Campaigns</h2>
            <ul>
                {campaigns.map((campaign) => (
                    <li key={campaign.id}>{campaign.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default CampaignList;
