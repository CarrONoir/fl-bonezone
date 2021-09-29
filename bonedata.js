/*Types are: frame,skull,arms,leg,wing,fin,tentacle,tail,mod,finish
Many things rely on correct type-ing so be careful!

Remember that it's not torso or ribcage but frame! No torsos here!
Also, yeah, you could call it torso or ribcage instead of frame, but not all of them are torsos or ribcages. All of them Are frames for a skeleton though!

If there's pvalue, there must be pvalue_text as well!
*/
const BONEDATA = [
    {
        type: "frame",
        name: "Headless Skeleton",
        img_link: "images/bonesmall_ph.png",
        pvalue: 250,
        pvalue_text : "250 <img class='bonedesc_img' src='images/coin_ph.png' alt='bonesmall_ph' width='25' height='25'/>", /*Is this cheating? Perhaps.*/
        skullslots: 1,
        arms: 2,
        legs: 2
    },
    {
        type: "frame",
        name: "Supply a skeleton of your own",
        img_link: "images/profile_ph.png",
        pvalue: 250,
        pvalue_text : "250 <img class='bonedesc_img' src='images/coin_ph.png' alt='bonesmall_ph' width='25' height='25'/>",
        special: "Licentiates only"
    },
    {
        type: "skull",
        name: "Cap this with a victim’s skull",
        img_link: "images/bonesmall_ph.png",
        pvalue: 250,
        pvalue_text : "250 <img class='bonedesc_img' src='images/coin_ph.png' alt='bonesmall_ph' width='25' height='25'/>",
        special: "Licentiates only"
    }
]