
let library = [
    {title: "Anime1",
    origin: "Japan",
    isWatched: true
    },
    {title: "Anime2",
     origin: "Korea",
     isWatched: true
    },
    {title: "Anime3",
     origin: "Chinese",
     isWatched: false
    }
];




function addAnime(){

    let newAnime = {};

    newAnime.title = prompt("What's the title of the anime?");
    newAnime.origin = prompt("What country was the anime produced?");
    let watched = prompt("Is this anime already watched? Enter( Y | N )");
    //CONVERT PROMPT TO BOOLEN ACCEPT LOWER AND UPPER CASE Y AS TRUE
    newAnime.isWatched = watched == "Y" ? true : watched == "y"? true : false;

    library.push(newAnime);
}//END OF ADD ANIME

function listAnimes(object){

    //PRINT TO SCREEN ANIME LISTS
    document.getElementById("animelist").innerHTML += 
    `Title:${object.title}`+"<br />"+
    `Origin:${object.origin}`+"<br />"+
    `Watched:${object.isWatched}`+"<br /><br />";

}//END OF LISTANIMES


function markAsRead(){
    let titles = [];

     //LIST UNWATCHED ANIME
    let unwatched = library.filter((library)=>{
        return library.isWatched == false;
    });

    //PUT TITLES INTO AN ARRAY FOR DISPLAY
    unwatched.forEach((unwatched)=>{
        titles.push(unwatched.title);
    });
    //CHECK IF THERE ARE UNWATCHED ANIMES FIRST
    if(titles.length > 0){
        
    //PROMPT USER WITH ONLY UNWATCHED ANIME TITLE LIST
    const title = prompt(`Enter the title of the anime to mark as read. The following are the unwatched titles: 
        ${titles}`);
     
     library.forEach((library)=>{
             if(library.title == title){
                alert(`${title} has now been marked as watched!`)
                 return library.isWatched = true;
             }else{
                 return;
             }
         });
    }
    //IF THERE ARE NO UNWATCHED ANIME RETURN FUNCTION
    else{
        alert('There are no more unwatched animes :D');
        return;
    }
        

}//END OF MARK AS READ



let running = true;

function animeApp(){
    while(running){

        const choice = prompt(`
            📺 Anime Tracker
            1. Add Anime
            2. List Animes
            3. Mark Anime as watched
            4. Exit
            **Enter your choice numerically:
            `);
    
        switch(choice){
            case "1":
                addAnime();
                break;
            case "2":
                library.forEach(listAnimes);
                running = false;
                break;
            case "3":
                markAsRead();
                break;
            case "4":
                running = false;
                alert("Goodbye!");
                break;
            default:
                alert("Invalid choice. Please select a numerical option.");
        }//END OF SWITCH
    
    }//END OF WHILE RUNNING

}//END OF ANIMEAPP

animeApp();

