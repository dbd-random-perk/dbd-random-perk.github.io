var index = 0,
    amount = 0,
    currTransl = [],
    translationComplete = true,
    moveOffset = 0,
    amount_surviver = 0;

var transitionCompleted = function(){
    translationComplete = true;
}

var surviver_list = [
  "IconPerks_anyMeansNecessary.png",
  "IconPerks_breakout.png",
  "IconPerks_darkSense.png",
  "IconPerks_dejaVu.png",
  "IconPerks_hope.png",
  "IconPerks_kindred.png",
  "IconPerks_lightweight.png",
  "IconPerks_luckyBreak.png",
  "IconPerks_noOneLeftBehind.png",
  "IconPerks_plunderersInstinct.png",
  "IconPerks_premonition.png",
  "IconPerks_resilience.png",
  "IconPerks_slipperyMeat.png",
  "IconPerks_smallGame.png",
  "IconPerks_spineChill.png",
  "IconPerks_technician.png",
  "IconPerks_thisIsNotHappening.png",
  "IconPerks_wellMakeIt.png",
  "Teachable_aceInTheHole.png",
  "Teachable_adrenaline.png",
  "Teachable_aftercare.png",
  "Teachable_alert.png",
  "Teachable_autodidact.png",
  "Teachable_babysitter.png",
  "Teachable_balancedLanding.png",
  "Teachable_betterTogether.png",
  "Teachable_boilOver.png",
  "Teachable_bond.png",
  "Teachable_borrowedTime.png",
  "Teachable_botanyKnowledge.png",
  "Teachable_breakdown.png",
  "Teachable_buckleUp.png",
  "Teachable_calmSpirit.png",
  "Teachable_camaraderie.png",
  "Teachable_danceWithMe.png",
  "Teachable_deadHard.png",
  "Teachable_decisiveStrike.png",
  "Teachable_deliverance.png",
  "Teachable_detectivesHunch.png",
  "Teachable_distortion.png",
  "Teachable_diversion.png",
  "Teachable_empathy.png",
  "Teachable_fixated.png",
  "Teachable_flip-Flop.png",
  "Teachable_forThePeople.png",
  "Teachable_headOn.png",
  "Teachable_innerStrength.png",
  "Teachable_ironWill.png",
  "Teachable_leader.png",
  "Teachable_leftBehind.png",
  "Teachable_lithe.png",
  "Teachable_mettleOfMan.png",
  "Teachable_noMither.png",
  "Teachable_objectOfObsession.png",
  "Teachable_offTheRecord.png",
  "Teachable_open-Handed.png",
  "Teachable_pharmacy.png",
  "Teachable_poised.png",
  "Teachable_proveThyself.png",
  "Teachable_quickAndQuiet.png",
  "Teachable_redHerring.png",
  "Teachable_saboteur.png",
  "Teachable_saboteur_old.png",
  "Teachable_secondWind.png",
  "Teachable_selfCare.png",
  "Teachable_soleSurvivor.png",
  "Teachable_solidarity.png",
  "Teachable_sprintBurst.png",
  "Teachable_stakeOut.png",
  "Teachable_streetwise.png",
  "Teachable_technician.png",
  "Teachable_tenacity.png",
  "Teachable_unbreakable.png",
  "Teachable_upTheAnte.png",
  "Teachable_urbanEvasion.png",
  "Teachable_vigil.png",
  "Teachable_wakeUp.png",
  "Teachable_wereGonnaLiveForever.png",
  "Teachable_windowsOfOpportunity.png",
].sort(function(){return 0.5-Math.random()});

document.addEventListener("DOMContentLoaded", function(event)
{
    var carousel = document.getElementById('carousel');

    amount_surviver = surviver_list.length;
    for (var i = 0; i < amount_surviver; i++) {
      var child = document.createElement('li');
      child.classList.add('slide', 'animate');
      var img = document.createElement('img');
      img.src = "../img/surviver/" + surviver_list[i];
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
    var rand = parseInt(Math.random() * (amount_surviver - 1)) + 1;
    console.log(rand);
    document.getElementsByClassName("slide")[(index + rand + 1) % amount].children[0].style.opacity = 1;
    for (var j = 0; j < rand; j++)
        setTimeout(next, j * 50);
}
