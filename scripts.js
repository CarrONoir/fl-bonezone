window.onload = function() {
    loadBones(BONEDATA);
}

function iconBig(x) {
    x.style.transform = "scale(1.1, 1.1)";
}

function iconNormal(x) {
    x.style.transform = "none";
}

function createBone(bone_spec) {
    var bone = document.createElement("li");
    bone.classList.add("bone");
    var bone_img = document.createElement("img");
    bone_img.classList.add("bonepic");
    bone_img.src = bone_spec.img_link;
    bone.appendChild(bone_img);
    document.getElementById(bone_spec.type).appendChild(bone);
}

function loadBones(bonelist) {
    for (let i=0;i<bonelist.length;i++) {
        createBone(bonelist[i]);
    }
}