window.onload = function() {
    loadBones(BONEDATA); /*Fills up the left section*/
}

function iconBig(element) {
    element.style.transform = "scale(1.1, 1.1)";
}

function iconNormal(element) {
    element.style.transform = "none";
}

function createBone(bone_spec) { /*Creates a bone-icon with all of it's functions for use in the left column. bone_spec is a single element from the data array*/
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

function loadBones(bonelist) { /*Creates all the bones from the bonelist array*/
    for (let i=0;i<bonelist.length;i++) {
        createBone(bonelist[i]);
    }
}

function createTT(element, bone) { /*Creates a tooltip of a specific bone, and assigns it under element*/
    /*This must cycle through and check all the possible properties a bone could have, comparing it to the data array
    The order here is the order on the tooltips. Chech for later ones to determing hr(|). Following this:
    For Frames: Name, Value, SourceTag |, Style |, Slots |, Built-in parts |, Attributes |, Special text
    For Bones (skulls, limbs and tails): Name, Value, SourceTag |, Challange, Challange extra text |, Attributes |, Special text
    For Mods:
    For Finishes:
    (was used when building the order)

    Things labaled as "Constant" in their comment are always appearing elements that need no checking.
    */

    var ttcont = document.createElement("div"); /*Constant Main wrapper*/
    ttcont.classList.add("ttcont");

    var bname = document.createElement("h3"); /*Constant Name*/
    bname.innerHTML = bone.name;
    ttcont.appendChild(bname);

    if (bone.pvalue) { /*Price-and-text. (mods and finishes don't have prices)*/
        var pvalue = document.createElement("span");
        pvalue.innerHTML = bone.pvalue + " <img class='bonedesc_img' src='images/coin_ph.png' alt='bonesmall_ph' width='25' height='25'/>";
        ttcont.appendChild(pvalue);
    }

    if (bone.sourceTag) { /*Source indicator (eg. Fate, Ambition etc.)*/
        var sourceTag = document.createElement("span");
        sourceTag.innerHTML = bone.sourceTag;
        ttcont.appendChild(sourceTag);
    }
    
    var spacer0 = document.createElement("hr"); /*Constant hr. There is always something after the price.*/
    spacer0.classList.add("desc");
    ttcont.appendChild(spacer0);

    if (bone.tstyle) { /*Torso (frame) style (While frames are special, it can't just check for frames, due to ordering sheninigans. (Built in parts come after the attributes.))*/
        var tstyle = document.createElement("span");
        tstyle.innerHTML = "Torso Style: " + bone.tstyle;
        ttcont.appendChild(tstyle);
        var spacer_ts = document.createElement("hr");
        spacer_ts.classList.add("desc");
        ttcont.appendChild(spacer_ts);
    }

    if (bone.skullslots || bone.limbslots || bone.tailslots) { /*The open slots on frames*/
        if (bone.skullslots) {
            var skullslots = document.createElement("span");
            skullslots.innerHTML = bone.skullslots + " x <span class='pink'>Skullslots</span>";
            ttcont.appendChild(skullslots);
        }
        if (bone.limbslots) {
            var limbslots = document.createElement("span");
            limbslots.innerHTML = bone.limbslots + " x <span class='pink'>Limbslots</span>";
            ttcont.appendChild(limbslots);
        }
        if (bone.tailslots) {
            var tailslots = document.createElement("span");
            tailslots.innerHTML = bone.tailslots + " x <span class='pink'>Tailslots</span>";
            ttcont.appendChild(tailslots);
        }
        if (bone.bskulls || bone.barms || bone.blegs || bone.bwings || bone.bfins || bone.btentacles || bone.btails || bone.antiquity || bone.menace || bone.amalgamy || bone.supportcc || bone.implausibility || bone.special) { /*Is there more?*/
            var spacer_slots = document.createElement("hr");
            spacer_slots.classList.add("desc");
            ttcont.appendChild(spacer_slots);
        }
    }

    if (bone.ch_lv && bone.ch_nm) { /*Challanges. Frames and bone attribues (like slots) don't mix with a precise database.*/
        var challenge = document.createElement("span");
        challenge.innerHTML = bone.ch_lv + " " + bone.ch_nm;
        ttcont.appendChild(challenge);
        if (bone.ch_ex) {
            var challenge_ex = document.createElement("span");
            challenge_ex.innerHTML = bone.ch_ex;
            ttcont.appendChild(challenge_ex);
        }
        if (bone.antiquity || bone.menace || bone.amalgamy || bone.supportcc || bone.implausibility || bone.special) {
            var spacer_chall = document.createElement("hr");
            spacer_chall.classList.add("desc");
            ttcont.appendChild(spacer_chall);
        }
    }

    if (bone.bskulls || bone.barms || bone.blegs || bone.bwings || bone.bfins || bone.btentacles || bone.btails) { /*For frames that come with built-in parts*/
        var builtin_notice = document.createElement("span");
        builtin_notice.innerHTML = "Built-in:";
        ttcont.appendChild(builtin_notice);
        if (bone.bskulls) {
            var bskulls = document.createElement("span");
            bskulls.innerHTML = bone.bskulls + " x Skulls";
            ttcont.appendChild(bskulls);
        }
        if (bone.barms) {
            var barms = document.createElement("span");
            barms.innerHTML = bone.barms + " x Arms";
            ttcont.appendChild(barms);
        }
        if (bone.blegs) {
            var blegs = document.createElement("span");
            blegs.innerHTML = bone.blegs + " x Legs";
            ttcont.appendChild(blegs);
        }
        if (bone.bwings) {
            var bwings = document.createElement("span");
            bwings.innerHTML = bone.bwings + " x Wings";
            ttcont.appendChild(bwings);
        }
        if (bone.bfins) {
            var bfins = document.createElement("span");
            bfins.innerHTML = bone.bfins + " x Fins";
            ttcont.appendChild(bfins);
        }
        if (bone.btentacles) {
            var btentacles = document.createElement("span");
            btentacles.innerHTML = bone.btentacles + " x Tentacles";
            ttcont.appendChild(btentacles);
        }
        if (bone.btails) {
            var btails = document.createElement("span");
            btails.innerHTML = bone.btails + " x Tails";
            ttcont.appendChild(btails);
        }
        if (bone.antiquity || bone.menace || bone.amalgamy || bone.supportcc || bone.implausibility || bone.special) { /*Is there more?*/
            var spacer_builtin = document.createElement("hr");
            spacer_builtin.classList.add("desc");
            ttcont.appendChild(spacer_builtin);
        }
    }

    if (bone.antiquity || bone.menace || bone.amalgamy || bone.supportcc || bone.implausibility) { /*Attributes*/
        if (bone.antiquity) {
            var antiquity = document.createElement("span");
            if (bone.antiquity_min) antiquity.innerHTML = bone.antiquity_min + "-" + bone.antiquity + " x <span class='yellow'>Antiquity</span>";
            else antiquity.innerHTML = bone.antiquity + " x <span class='yellow'>Antiquity</span>";
            ttcont.appendChild(antiquity);
        }
        if (bone.menace) {
            var menace = document.createElement("span");
            if (bone.menace_min) menace.innerHTML = bone.menace_min + "-" + bone.menace + " x <span class='red'>Menace</span>";
            else menace.innerHTML = bone.menace + " x <span class='red'>Menace</span>";
            ttcont.appendChild(menace);
        }
        if (bone.amalgamy) {
            var amalgamy = document.createElement("span");
            amalgamy.innerHTML = bone.amalgamy + " x <span class='orange'>Amalgamy</span>";
            ttcont.appendChild(amalgamy);
        }
        if (bone.supportcc) {
            var supportcc = document.createElement("span");
            supportcc.innerHTML = bone.supportcc + " x <span class='ccblue'>CC Support</span>";
            ttcont.appendChild(supportcc);
        }
        if (bone.implausibility) {
            var implausibility = document.createElement("span");
            if (bone.implausibility_dif) { //Oh yeah 0 is false..
                implausibility.innerHTML = (bone.implausibility-bone.implausibility_dif) + "-" + bone.implausibility + " x <span class='grey'>Implausibility</span>";
            } else {
                implausibility.innerHTML = bone.implausibility + " x <span class='grey'>Implausibility</span>";
            }
            ttcont.appendChild(implausibility);
        }
        if (bone.special) {
            var spacer_attributes = document.createElement("hr");
            spacer_attributes.classList.add("desc");
            ttcont.appendChild(spacer_attributes);
        }
    }

    if (bone.special) { /*Extra text*/
        var special = document.createElement("span");
        special.innerHTML = bone.special;
        ttcont.appendChild(special);
    }

    var spacer_end = document.createElement("hr");  /*Adds a little space to the end*/
    spacer_end.classList.add("end");
    ttcont.appendChild(spacer_end);

    element.appendChild(ttcont);
}

function deleteTT() {    /*Deletes all currently active tooltips. There shouldn't be more than 1 at any time, but just to be safe*/
    var tt = document.getElementsByClassName("ttcont");
    for (let i=0;i<tt.length;i++) {
        tt[i].remove();
    }
}