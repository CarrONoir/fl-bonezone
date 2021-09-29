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

    //bone_img.onmouseover = function(){iconBig(this)};
    bone_img.onmouseover = function(){createTT(this.parentElement, bone_spec)};
    //bone_img.onmouseout = function(){iconNormal(this)};
    bone_img.onmouseout = function(){deleteTT()};

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
    var ttcont = document.createElement("div"); /*Main wrapper*/
    ttcont.classList.add("ttcont");

    var bname = document.createElement("h3"); /*Name*/
    bname.innerHTML = bone.name;
    ttcont.appendChild(bname);

    if (bone.pvalue) { /*Show price-text, if there is a price. Only the mods and finishes don't have pvalues, but they are stored in the same database, due to appearing in the same way*/
        var pvalue = document.createElement("span");
        pvalue.innerHTML = bone.pvalue_text;
        ttcont.appendChild(pvalue);
    }
    
    var spacer0 = document.createElement("hr"); /*Constant hr. This is always here. There is always something after the price.*/
    spacer0.classList.add("desc");
    ttcont.appendChild(spacer0);

    element.appendChild(ttcont);
}

function deleteTT() {    /*Deletes all currently active tooltips. There shouldn't be more than 1 at any time, but just to be safe*/
    var tt = document.getElementsByClassName("ttcont");
    for (let i=0;i<tt.length;i++) {
        tt[i].remove();
    }
}