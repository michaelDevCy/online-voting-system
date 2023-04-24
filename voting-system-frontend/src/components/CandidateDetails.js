import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CandidateDetails.css';

function CandidateDetails() {
    const { id } = useParams();
    const [candidate, setCandidate] = useState(null);

    useEffect(() => {
        // Replace the URL below with your actual API endpoint URL
        fetch(`http://onlinevotingsystem-dev2.us-west-2.elasticbeanstalk.com/api/candidates/${id}`)
            .then((response) => response.json())
            .then((data) => setCandidate(data))
            .catch((error) => console.error('Error fetching candidate:', error));
    }, [id]);


    if (!candidate) {
        return <div>Loading...</div>;
    }

    return (
        <div className="candidate-details-container">
            <h2>{candidate.name}</h2>
            <p>ID: {candidate._id}</p>
            <p>Current Votes: {candidate.voteCount}</p>
        </div>
    );
}

export default CandidateDetails;
