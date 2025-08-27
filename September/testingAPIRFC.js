async function fetchRFCData(id) {
  const apiUrl = `https://siniestrosqa.qualitassalud.com.mx/cta-pm/api/find?id=${id}`;
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });

      console.debug(response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    
    
    return data;
  } catch (error) {
    console.error('Error fetching siniestro data:', error);
    throw error;
  }
}

fetchRFCData('COM090521IVA')
  .then(data => console.log('Data received:', data))
  .catch(error => console.error('Failed to fetch data:', error));