
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const WordDetails = () => {
  const { word } = useParams();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWordDetails = async () => {
      try {
        const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        console.log(response); // Log the fetched data
        setDetails(response.data); // Set the fetched word details
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching word details:', error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchWordDetails();
  }, [word]);

  if (loading) {
    return <div>Loading...</div>; // Display loader while fetching data
  }

  if (!details || details.length === 0) {
    return <div>Word details not found</div>; // Display if details are not available or empty
  }

  return (
    <div>
      
      <pre>{JSON.stringify(details, null, 2)}</pre>
    </div>
  );
};

export default WordDetails;
