const hideNarration = document.getElementById("narration").style.display="none";
const charStats = {
    name: "",
    sex: "",
    level: 1,
    strength: Math.round(Math.random() * 6),
    smarts: Math.round(Math.random() * 6),
    speed: Math.round(Math.random() * 6),
    hitPoints: 20,
    cash: 0,
    weapon: "Fists",
    armor: "None",
    outfit: "Shabby Urchin Gear",
    reputation: "Anonymous",
    repScore: 0
}

document.getElementById("menuDivider").style.display="none"

function loginToGame() {
    document.getElementById("landing").style.display="none";
    document.getElementById("menuTitle").innerHTML = "Out on the street";
    document.getElementById("menuTitle").style.display="block";
    document.getElementById("charLevel").innerHTML = "Experience Level: " + charStats.level;
    document.getElementById("cash").innerHTML="Cash: $" + charStats.cash;
    document.getElementById("cash").style.display="block";
    document.getElementById("hitPoints").innerHTML="Hit Points: " + charStats.hitPoints;
    document.getElementById("menuDivider").style.display="block";
    document.getElementById("narration").style.display="block";
    
    if (charStats.level === 1) (
    document.getElementById("narration").innerHTML = "You are alone, after dark, on the streets of a bad neighborhood. The streets are litter-strewn and potholed, graffiti mars most exterior walls. You're just a kid, you don't feel safe here at all, but you have nowhere else to go. What do you do?"
    )
    if (charStats.level === 2) (
    document.getElementById("narration").innerHTML = "You're starting to get used to existing here, in the urban wasteland. The other residents are getting used to you, as well, and coming to understand that you are not an easy mark."
    )
    
    document.getElementById("walkTrack").style.display="block";
    document.getElementById("walkTrack").innerHTML=
    "<button type='button' onClick='walkTrack()'>Walk the track</button>"
    document.getElementById("viewCharSheet").style.display="block";
    document.getElementById("viewCharSheet").innerHTML="<button type='button' onClick='charSheet()'>View Character sheet</button>"
}

function backToStreet() {
    document.getElementById("trackEncounter").style.display="none";
    document.getElementById("charSheet").style.display="none";
    document.getElementById("narration").style.display="block";
    document.getElementById("menuGroup").style.display="block";
}

function walkTrack() {
    document.getElementById("menuGroup").style.display="none";
    document.getElementById("narration").style.display="none";
    document.getElementById("trackEncounter").style.display="block";
    document.getElementById("trackEncounter").innerHTML = "This function contains random encounters. <button type='button' onClick='backToStreet()'>Back to the streets</button>";
}

function charSheet() {
    document.getElementById("menuGroup").style.display="none";
    document.getElementById("narration").style.display="none";
    document.getElementById("charSheet").style.display="block";
    document.getElementById("charSheet").innerHTML = "This function shows your vital statistics.";
}