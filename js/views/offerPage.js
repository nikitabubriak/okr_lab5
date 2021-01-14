const urlParser = (offers) =>
{
    let subdir = window.location.hash.split('/')[1];

    for (let i = 0; i < offers.length; i++)
    {
        if (offers[i].url === subdir)   return offers[i];
    }
}

const view = (offers) => 
{
    let page = urlParser(offers);

    let offerPage =
    `
    <div class = "offer">
        <a class = "offer-link" href = "#offer/${page.url}">
            <img src = "${page.image}" alt = "${page.name}">
        </a>
        <div class = "offer-details">
            <br><span class = "offer-name">${page.name}</span>
            <br><span class = "offer-date-posted">Date posted: ${page.datePosted}</span>
            <br><span class = "offer-description">${page.description}</span>
        </div>
    </div>
    `;

    return offerPage;
}


export default view;