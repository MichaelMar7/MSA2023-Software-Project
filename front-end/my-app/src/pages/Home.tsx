export default function Home () { return (
    <div style={{margin:"64px",}}>
        <p>Welcome to the Supercell Accounts Application, where you can search and store players tags of accounts from the mobile video games <b>Clash of Clans</b>, <b>Clash Royale</b>, and <b>Brawl Stars</b>; by the video game company Supercell. This project is create for the Microsoft Student Acclerator NZ Programme 2023 - Software Development, by Michael Mar. </p>
        <p>This application uses React with Typescript for the front-end, ASP.NET Core for the back-end, and uses Azure for the database and deployment.</p>
        <p>In this application, users can search for players for the respective video games by input the player's player tag which can be found inside the player's account in their respective games and it would display their palyer's stats, like wins and progress; these stats can vary between each game.</p>
        <p>Users can also create an account for this application to store some of player tags so they can quickly access some of their saved players without manually searching them up. Users can add or remove these player tags from their profile.</p>
        <p>This is the deployed version of the application via Microsoft Azure.</p>
        <p><b>NOTE:</b> Whenever you add or remove player tags from your profile, you have to wait for a little bit and reload the page or go to another page for the effect to be visually shown.</p>
     </div>
    )
}