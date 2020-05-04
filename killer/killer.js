var index = 0,
    amount = 0,
    currTransl = [],
    translationComplete = true,
    moveOffset = 0,
    amount_killer = 0;

var transitionCompleted = function(){
    translationComplete = true;
}

var killer_list = [
  "IconPerks_bitterMurmur.png",
  "IconPerks_bloodEcho.png",
  "IconPerks_deerstalker.png",
  "IconPerks_distressing.png",
  "IconPerks_hexNoOneEscapesDeath.png",
  "IconPerks_hexThrillOfTheHunt.png",
  "IconPerks_insidious.png",
  "IconPerks_ironGrasp.png",
  "IconPerks_monstrousShrine.png",
  "IconPerks_nemesis.png",
  "IconPerks_sloppyButcher.png",
  "IconPerks_spiesFromTheShadows.png",
  "IconPerks_unrelenting.png",
  "IconPerks_whispers.png",
  "IconPerks_zanshinTactics.png",
  "Teachable_agitation.png",
  "Teachable_aNursesCalling.png",
  "Teachable_bamboozle.png",
  "Teachable_barbecueAndChilli.png",
  "Teachable_beastOfPrey.png",
  "Teachable_bloodhound.png",
  "Teachable_bloodWarden.png",
  "Teachable_brutalStrength.png",
  "Teachable_corruptIntervention.png",
  "Teachable_coulrophobia.png",
  "Teachable_cruelLimits.png",
  "Teachable_darkDevotion.png",
  "Teachable_deadMansSwitch.png",
  "Teachable_discordance.png",
  "Teachable_dyingLight.png",
  "Teachable_enduring.png",
  "Teachable_fireUp.png",
  "Teachable_franklinsDemise.png",
  "Teachable_furtiveChase.png",
  "Teachable_gearhead.png",
  "Teachable_hangmansTrick.png",
  "Teachable_hexDevourHope.png",
  "Teachable_hexHauntedGround.png",
  "Teachable_hexHuntressLullaby.png",
  "Teachable_hexRuin.png",
  "Teachable_hexTheThirdSeal.png",
  "Teachable_imAllEars.png",
  "Teachable_infectiousFright.png",
  "Teachable_ironMaiden.png",
  "Teachable_knockOut.png",
  "Teachable_lightborn.png",
  "Teachable_madGrit.png",
  "Teachable_makeYourChoice.png",
  "Teachable_mindbreaker.png",
  "Teachable_monitorAndAbuse.png",
  "Teachable_overcharge.png",
  "Teachable_overwhelmingPresence.png",
  "Teachable_playWithYourFood.png",
  "Teachable_popGoesTheWeasel.png",
  "Teachable_predator.png",
  "Teachable_rancor.png",
  "Teachable_rememberMe.png",
  "Teachable_saveTheBestForLast.png",
  "Teachable_shadowborn.png",
  "Teachable_spiritFury.png",
  "Teachable_stridor.png",
  "Teachable_surge.png",
  "Teachable_surveillance.png",
  "Teachable_territorialImperative.png",
  "Teachable_thanatophobia.png",
  "Teachable_thrillingTremors.png",
  "Teachable_tinkerer.png",
  "Teachable_unnervingPresence.png",
].sort(function(){return 0.5-Math.random()});

document.addEventListener("DOMContentLoaded", function(event)
{
    var carousel = document.getElementById('carousel');

    amount_killer = killer_list.length;
    for (var i = 0; i < amount_killer; i++) {
      var child = document.createElement('li');
      child.classList.add('slide', 'animate');
      var img = document.createElement('img');
      img.src = "../img/killer/" + killer_list[i];
      child.appendChild(img);
      carousel.appendChild(child);
    }

    amount = document.getElementsByClassName("slide").length;
    // get the width of the container
    moveOffset = parseInt(window.getComputedStyle(document.getElementById('carousel-container')).width, 10);
    // calcuate the width of the carousel
    document.getElementById('carousel').style.width = (amount * moveOffset) + 'px';
    // prevent multiple click when transition
    for(var i = 0; i < amount; i++)
        currTransl[i] = -moveOffset;
    // add the last item to the start so that translateX(-moveOffset) works (In case the first click is the previous button)
    // document.getElementById('carousel').insertBefore(document.getElementById('carousel').children[4],document.getElementById('carousel').children[0])
    // add click events to control arrows
    document.getElementById('next').addEventListener('click', next, true);
});

function next()
{
    for(var i = 0; i < amount; i++)
    {
        var slide = document.getElementsByClassName("slide")[i];
        slide.style.transform = 'translateX('+(currTransl[i]-moveOffset)+'px)';
        currTransl[i] = currTransl[i]-moveOffset;
    }

    if (index >= 5) {
        var outerIndex = (index - 5) % amount;
        var outerSlide = document.getElementsByClassName("slide")[outerIndex];
        outerSlide.style.opacity = 0;
        outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]+(moveOffset*amount))+'px)';
        currTransl[outerIndex] = currTransl[outerIndex]+moveOffset*(amount);
        outerSlide.style.opacity = 1;
    }
    index++;
}

function roll() {
    document.getElementsByClassName("slide")[(index + 1) % amount].children[0].style.opacity = 0.5;
    var rand = parseInt(Math.random() * (amount_killer - 1)) + 1;
    console.log(rand);
    document.getElementsByClassName("slide")[(index + rand + 1) % amount].children[0].style.opacity = 1;
    for (var j = 0; j < rand; j++)
        setTimeout(next, j * 50);
}
