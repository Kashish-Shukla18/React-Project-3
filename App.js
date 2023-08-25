import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "Kashish",
        lastName: "Shukla",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        favorite: true
    })
    
    let starIcon = contact.Favorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        console.log("Toggle Favorite")
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}
