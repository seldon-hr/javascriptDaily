async function fetchRFCData(id) {
    try {
        /* const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); */
        
        const response = await fetch('https://siniestrosqa.qualitassalud.com.mx/cta-pm/api/find', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rfc: id,
            }),
            /* signal: controller.signal */
        });
        
        /* clearTimeout(timeoutId); */

      console.debug(response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching RFC data:', error);
    throw error;
  }
}

fetchRFCData('GCA-141104-EC4')
  .then(data => console.log('Data received:', data))
  .catch(error => console.error('Failed to fetch data:', error));