

const short = async (link)=>{

const base = `https://api.shrtco.de/v2/shorten?url=${link}`
const response = await fetch(base);
const data = await response.json();

return data;

}

// short('https://chat.whatsapp.com/DzAerZbTfYCHZtOL1szlK0')
// .then(data=> console.log(data))
// .catch(err=> console.log(err))