
while(running){

    const choice = prompt(`
        📺 Anime Tracker
        1. Add Anime
        2. List Animes
        3. Mark Anime as watched
        4. Exit
        Enter your choice numerically:
        `);

    switch(choice){
        case "1":
            addAnime();
            break;
        case "2":
            listAnimes();
            break;
        case "3":
            const title = prompt("Enter the title of the anime to mark as read");
            markAsRead(title);
            break;
        case "4":
            running = false;
            alert("Goodbye!");
            break;
        default:
            alert("Invalid choice.");
    }//END OF SWITCH

}//END OF WHILE RUNNING