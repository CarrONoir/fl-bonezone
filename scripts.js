window.onload = function() {
    loadBones(BONEDATA); //Fills up the left section
}

let pvalue = 0;let pvalue_dif = 0;
let amalgamy = 0;let amalgamy_dif = 0;
let antiquity = 0;let antiquity_dif = 0;
let menace = 0;let menace_dif = 0;
let implausibility = 0;let implausibility_dif = 0;
let supportcc = 0;let supportcc_dif = 0;
let skullslots = 0;let limbslots = 0;let tailslots = 0;
let skulls = 0;let arms = 0;let legs = 0;let wings = 0;let fins = 0;let tentacles = 0;let tails = 0;
let tstyle = 0;
let listlenght = 0;
let exhaustion = 0;let exhaustion_dif = 0;//You never know the future
let state_comp = 0; //0-frame 1-bones 2-mods

//Creates all the bones from the bonelist array
function loadBones(bonelist) {
    for (let i=0;i<bonelist.length;i++) {
        createBone(bonelist[i]);
    }
}

function iconBig(element) {
    element.style.transform = "scale(1.1, 1.1)";
}

function iconNormal(element) {
    element.style.transform = "none";
}

//Creates a bone-icon with all of it's functions for use in the left column. bone_spec is a single element from the data array
function createBone(bone_spec) {
    var bone = document.createElement("li");
    bone.classList.add("bone");
    var bone_img = document.createElement("img");
    bone_img.classList.add("bonepic");
    bone_img.style.cursor = "pointer";

    bone_img.onmouseover = function(){iconBig(this);createTT(this.parentElement, bone_spec)};
    bone_img.onmouseout = function(){iconNormal(this);deleteTT()};
    bone_img.onclick = function(){addBone(bone_spec)};

    bone_img.src = bone_spec.img_link;

    bone.appendChild(bone_img);
    document.getElementById(bone_spec.type).appendChild(bone);
}

//Hey JavaScript where is my overloading huh?
//Creates and element of type, assigns it under parent, and loads the innerHTML of new element with a number of parameters (4,3,2 or 1 respectively)
function createElementModInH4(type, parent, tfirst, tsecond, tthird, tfourth) {
    var telem = document.createElement(type);
    telem.innerHTML = tfirst + tsecond + tthird + tfourth;
    parent.appendChild(telem);
}
function createElementModInH3(type, parent, tfirst, tsecond, tthird) {
    var telem = document.createElement(type);
    telem.innerHTML = tfirst + tsecond + tthird;
    parent.appendChild(telem);
}
function createElementModInH2(type, parent, tfirst, tsecond) {
    var telem = document.createElement(type);
    telem.innerHTML = tfirst + tsecond;
    parent.appendChild(telem);
}
function createElementModInH1(type, parent, tfirst) {
    var telem = document.createElement(type);
    telem.innerHTML = tfirst;
    parent.appendChild(telem);
}

//Creates and element of type, assigns it under parent, and adds a class of classname to it
function createElementModAddClass(type, parent, classname) {
    var telem = document.createElement(type);
    telem.classList.add(classname);
    parent.appendChild(telem);
}


/*Creates a tooltip of a specific bone, and assigns it under element*/
/*This must cycle through and check all the possible properties a bone could have, comparing it to the data array
The order here is the order on the tooltips. Chech for later ones to determing hr(|). Following this:
For Frames: Name, Value, SourceTag |, Style |, Slots |, Built-in parts |, Attributes |, Special text
For Bones (skulls, limbs and tails): Name, Value, SourceTag |, Challange, Challange extra text |, Attributes |, Special text
For Mods:
For Finishes:
(was used when building the order)
Things labaled as "Constant" in their comment are always appearing elements that need no checking.
*/
function createTT(element, bone) {
    //Constant Main wrapper
    var ttcont = document.createElement("div");
    ttcont.classList.add("ttcont");

    //Constant name
    createElementModInH1("h3", ttcont, bone.name);

    //Price-and-text. (mods and finishes don't have prices)
    if (bone.pvalue) {
        if (bone.pvalue_dif) createElementModInH4("span", ttcont, bone.pvalue-bone.pvalue_dif, "-", bone.pvalue, " <img class='bonedesc_img' src='images/coin_ph.png' alt='bonesmall_ph' width='25' height='25'/>");
        else createElementModInH2("span", ttcont, bone.pvalue, " <img class='bonedesc_img' src='images/coin_ph.png' alt='bonesmall_ph' width='25' height='25'/>");
    }
    if (bone.pvalue == 0) createElementModInH2("span", ttcont, 0, " <img class='bonedesc_img' src='images/coin_ph.png' alt='bonesmall_ph' width='25' height='25'/>");
    //Oh yeah 0 is false..

    //Source indicator (eg. Fate, Ambition etc.)
    if (bone.sourceTag) createElementModInH1("span", ttcont, bone.sourceTag);
    
    //Constant hr. There is always something after the price.
    createElementModAddClass("hr", ttcont, "desc");

    //Torso (frame) style (While frames are special, it can't just check for frames, due to ordering sheninigans. (Built in parts come after the attributes.))
    if (bone.tstyle) {
        createElementModInH2("span", ttcont, "Torso Style: ", bone.tstyle);
        createElementModAddClass("hr", ttcont, "desc");
    }

    //The open slots on frames
    if (bone.skullslots || bone.limbslots || bone.tailslots) {
        if (bone.skullslots) createElementModInH2("span", ttcont, bone.skullslots, " x <span class='pink'>Skullslots</span>");
        if (bone.limbslots) createElementModInH2("span", ttcont, bone.limbslots, " x <span class='pink'>Limbslots</span>");
        if (bone.tailslots) createElementModInH2("span", ttcont, bone.tailslots, " x <span class='pink'>Tailslots</span>");
        if (bone.bskulls || bone.barms || bone.blegs || bone.bwings || bone.bfins || bone.btentacles || bone.btails || bone.antiquity || bone.menace || bone.amalgamy || bone.supportcc || bone.implausibility || bone.special) { /*Is there more?*/
            createElementModAddClass("hr", ttcont, "desc");
        }
    }

    //Challanges. Frames and bone attribues (like slots) don't mix with a precise database.
    if (bone.ch_lv && bone.ch_nm) {
        createElementModInH3("span", ttcont, bone.ch_lv, " ", bone.ch_nm);
        if (bone.ch_ex) createElementModInH1("span", ttcont, bone.ch_ex);
        if (bone.antiquity || bone.menace || bone.amalgamy || bone.supportcc || bone.implausibility || bone.special) {
            createElementModAddClass("hr", ttcont, "desc");
        }
    }

    //For frames that come with built-in parts
    if (bone.bskulls || bone.barms || bone.blegs || bone.bwings || bone.bfins || bone.btentacles || bone.btails) {
        createElementModInH1("span", ttcont, "Built-in:");
        if (bone.bskulls) createElementModInH2("span", ttcont, bone.bskulls, " x Skulls");
        if (bone.barms) createElementModInH2("span", ttcont, bone.barms, " x Arms");
        if (bone.blegs) createElementModInH2("span", ttcont, bone.blegs, " x Legs");
        if (bone.bwings) createElementModInH2("span", ttcont, bone.bwings, " x Wings");
        if (bone.bfins) createElementModInH2("span", ttcont, bone.bfins, " x Fins");
        if (bone.btentacles) createElementModInH2("span", ttcont, bone.btentacles, " x Tentacles");
        if (bone.btails) createElementModInH2("span", ttcont, bone.btails, " x Tails");
        if (bone.antiquity || bone.menace || bone.amalgamy || bone.supportcc || bone.implausibility || bone.special) { /*Is there more?*/
            createElementModAddClass("hr", ttcont, "desc");
        }
    }

    if (bone.antiquity || bone.menace || bone.amalgamy || bone.supportcc || bone.implausibility || bone.exhaustion) { /*Attributes*/
        if (bone.antiquity) {
            if (bone.antiquity_dif) createElementModInH4("span", ttcont, bone.antiquity-bone.antiquity_dif, "-", bone.antiquity, " x <span class='yellow'>Antiquity</span>");
            else createElementModInH2("span", ttcont, bone.antiquity, " x <span class='yellow'>Antiquity</span>");
        }
        if (bone.menace) {
            if (bone.menace_dif) createElementModInH4("span", ttcont, bone.menace-bone.menace_dif, "-", bone.menace, " x <span class='red'>Menace</span>");
            else createElementModInH2("span", ttcont, bone.menace, " x <span class='red'>Menace</span>");
        }
        if (bone.amalgamy) {
            if (bone.amalgamy_dif) createElementModInH4("span", ttcont, bone.amalgamy-bone.amalgamy_dif, "-", bone.amalgamy, " x <span class='orange'>Amalgamy</span>");
            else createElementModInH2("span", ttcont, bone.amalgamy, " x <span class='orange'>Amalgamy</span>");
        }
        if (bone.supportcc) {
            if (bone.supportcc_dif) createElementModInH4("span", ttcont, bone.supportcc-bone.supportcc_dif, "-", bone.supportcc, " x <span class='ccblue'>CC Support</span>");
            else createElementModInH2("span", ttcont, bone.supportcc, " x <span class='ccblue'>CC Support</span>");
        }
        if (bone.implausibility) {
            if (bone.implausibility_dif) createElementModInH4("span", ttcont, bone.implausibility-bone.implausibility_dif, "-", bone.implausibility, " x <span class='grey'>Implausibility</span>");
            else createElementModInH2("span", ttcont, bone.implausibility, " x <span class='grey'>Implausibility</span>");
        }
        if (bone.exhaustion) {
            if (bone.exhaustion_dif) createElementModInH4("span", ttcont, bone.exhaustion-bone.exhaustion_dif, "-", bone.exhaustion, " x <span class='grey'>Exhaustion</span>");
            else createElementModInH2("span", ttcont, bone.exhaustion, " x <span class='grey'>Exhaustion</span>");
        }
        if (bone.special) {
            createElementModAddClass("hr", ttcont, "desc");
        }
    }

    if (bone.special) { /*Extra text*/
        createElementModInH1("span", ttcont, bone.special);
    }

    //Adds a little space to the end
    createElementModAddClass("hr", ttcont, "end");

    element.appendChild(ttcont);
}

/*Deletes all currently active tooltips. There shouldn't be more than 1 at any time, but just to be safe*/
function deleteTT() {
    var tt = document.getElementsByClassName("ttcont");
    for (let i=0;i<tt.length;i++) {
        tt[i].remove();
    }
}

/*Adds selected bone to the current calculation.*/
function addBone(bone) {
    switch (state_comp) {
        case 0:
            if (bone.type == "frame") {
                document.getElementById("d_framename").innerHTML = bone.name;//Shut up I know, this is an exception!
                //On second tought, these could've been arranged in two arrays...
                if (bone.skullslots) skullslots = bone.skullslots;
                if (bone.limbslots) limbslots = bone.limbslots;
                if (bone.tailslots) tailslots = bone.tailslots;
                if (bone.tstyle) tstyle = bone.tstyle;
                if (bone.bskulls) skulls = bone.bskulls;
                if (bone.barms) arms = bone.barms;
                if (bone.blegs) legs = bone.blegs;
                if (bone.bwings) wings = bone.bwings;
                if (bone.bfins) fins = bone.bfins;
                if (bone.btentacles) tentacles = bone.btentacles;
                if (bone.btails) tails = bone.btails;
                if (bone.amalgamy) amalgamy = bone.amalgamy;
                if (bone.amalgamy_dif) amalgamy_dif = bone.amalgamy_dif;
                if (bone.antiquity) antiquity = bone.antiquity;
                if (bone.antiquity_dif) antiquity_dif = bone.antiquity_dif;
                if (bone.menace) menace = bone.menace;
                if (bone.menace_dif) menace_dif = bone.menace_dif;
                if (bone.supportcc) supportcc = bone.supportcc;
                if (bone.supportcc_dif) supportcc_dif = bone.supportcc_dif;
                if (bone.implausibility) implausibility = bone.implausibility;
                if (bone.implausibility_dif) implausibility_dif = bone.implausibility_dif;
                pvalue += bone.pvalue;
                addLine(bone);
                state_comp = 1;
            }
            break;
        case 1:
            var changed = false;
            if (skullslots > 0 && bone.type == "skull") {
                skulls++;
                skullslots--;
                changed = true;
            }
            if (limbslots > 0 && (bone.type == "arm" || bone.type == "leg" || bone.type == "wing" || bone.type == "fin" || bone.type == "tentacle")) {
                switch (bone.type) {
                    case "arm":
                        arms++;
                        break;
                    case "leg":
                        legs++;
                        break;
                    case "wing":
                        wings++;
                        break;
                    case "fin":
                        fins++;
                        break;
                    case "tentacle":
                        tentacles++;
                        break;
                }
                limbslots--;
                changed = true;
            }
            if (tailslots > 0 && bone.type == "tail") {
                tails++;
                tailslots--;
                changed = true;
            }
            if (changed) {
                if (bone.amalgamy) amalgamy += bone.amalgamy;
                if (bone.amalgamy_dif) amalgamy_dif += bone.amalgamy_dif;
                if (bone.antiquity) antiquity += bone.antiquity;
                if (bone.antiquity_dif) antiquity_dif += bone.antiquity_dif;
                if (bone.menace) menace += bone.menace;
                if (bone.menace_dif) menace_dif += bone.menace_dif;
                if (bone.supportcc) supportcc += bone.supportcc;
                if (bone.supportcc_dif) supportcc_dif += bone.supportcc_dif;
                if (bone.implausibility) implausibility += bone.implausibility;
                if (bone.implausibility_dif) implausibility_dif += bone.implausibility_dif;
                pvalue += bone.pvalue;
                addLine(bone);
            }
            break;
        case 2:
            break;
    }

    updateDisplay();
}

/*Updates the display accoding to the numbers in the inner calculation.*/
function updateDisplay() {
    document.getElementById("d_pvalue").innerHTML = pvalue;
    document.getElementById("d_skulls").innerHTML = skulls;
    document.getElementById("d_arms").innerHTML = arms;
    document.getElementById("d_legs").innerHTML = legs;
    document.getElementById("d_wings").innerHTML = wings;
    document.getElementById("d_fins").innerHTML = fins;
    document.getElementById("d_tentacles").innerHTML = tentacles;
    document.getElementById("d_tails").innerHTML = tails;

    document.getElementById("d_skullslots").innerHTML = skullslots;
    document.getElementById("d_limbslots").innerHTML = limbslots;
    document.getElementById("d_tailslots").innerHTML = tailslots;

    if (amalgamy_dif) document.getElementById("d_amalgamy").innerHTML = (amalgamy-amalgamy_dif) + "-" + amalgamy;
    else document.getElementById("d_amalgamy").innerHTML = amalgamy;
    if (antiquity_dif) document.getElementById("d_antiquity").innerHTML = (antiquity-antiquity_dif) + "-" + antiquity;
    else document.getElementById("d_antiquity").innerHTML = antiquity;
    if (menace_dif) document.getElementById("d_menace").innerHTML = (menace-menace_dif) + "-" + menace;
    else document.getElementById("d_menace").innerHTML = menace;
    if (supportcc_dif) document.getElementById("d_supportcc").innerHTML = (supportcc-supportcc_dif) + "-" + supportcc;
    else document.getElementById("d_supportcc").innerHTML = supportcc;
    if (implausibility_dif) document.getElementById("d_implausibility").innerHTML = (implausibility-implausibility_dif) + "-" + implausibility;
    else document.getElementById("d_implausibility").innerHTML = implausibility;
}

/*Adds a line to the bottom of the middle column, with info about the specific bone */
function addLine(bone) {
    var line = document.createElement("div");
    createElementModInH3("div", line, (listlenght+1), ". ", bone.name);
    if (bone.ch_nm) {
        createElementModInH4("span", line, "&nbsp&nbsp&nbsp&nbsp", bone.ch_nms, " ", bone.ch_lv);
        
    }
    document.getElementById("listorder").appendChild(line);
    listlenght++;
}