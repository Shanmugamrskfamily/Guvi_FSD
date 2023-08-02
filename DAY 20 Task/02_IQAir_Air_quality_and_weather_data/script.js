async function fetchdata() {
    let response = await fetch("http://api.airvisual.com/v2/countries?key=99e874e7-f3b1-4d29-9430-6732230893eb");
    let data = await response.json();
    return data;
  }
  
  async function createCards() {
    const content = await fetchdata();
    for (let i = 0; i < content.data.length; i++) 
    {
      const country = content.data[i].country;
      console.log(country);
    }
  }
  
  createCards();  