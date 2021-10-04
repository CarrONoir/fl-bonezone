window.onload = function() {
    loadBones(BONEDATA); //Fills up the left section
}

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
    if (bone.pvalue) createElementModInH2("span", ttcont, bone.pvalue, " <img class='bonedesc_img' src='images/coin_ph.png' alt='bonesmall_ph' width='25' height='25'/>");
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

    if (bone.antiquity || bone.menace || bone.amalgamy || bone.supportcc || bone.implausibility) { /*Attributes*/
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

function deleteTT() {    /*Deletes all currently active tooltips. There shouldn't be more than 1 at any time, but just to be safe*/
    var tt = document.getElementsByClassName("ttcont");
    for (let i=0;i<tt.length;i++) {
        tt[i].remove();
    }
}