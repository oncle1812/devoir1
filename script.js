document.addEventListener('DOMContentLoaded',function(){
    const mesCitations =[
        "le succes n'est pas la cle du bonheur. le bonheur est la cle du succes -albert schweitzer",
        "ne reve pqs ta vie, vis tes reves -antoine de saint exupery",
        "l'action est la cle fondamental de tout succes  $
        -pablobpicasso",
        "la vie est un mystere qu'il faut vivre, et non un probleme qu'il faut resoudrre",
        "le plus grand risque est de ne prendre aucun risque -mark zuckerberg",
        "visez la lune. meme si vous echouez  ,vous atterirez parmi les etoilles  -les bronw",
        "si vous pouvez rever vous pouvez le faire. - walt disney"

    ];
    const leparagraphedecitation = document.getElementById('citationDisplay');
    const leboutonchanger = document.getElementById('changecitationBtn');

    function changerLaCitationAuHasard(){
        const indexAleatoir = Math.floor(Math.random() * mesCitations.length);
        const citationchoisie = mesCitations[indexAleatoir];
        leparagraphedecitation.innerHTML = citationchoisie;
    }

    leboutonchanger.addEventListener('click',changerLaCitationAuHasard);
    changerLaCitationAuHasard();
}
);