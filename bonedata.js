/*Array or objects for the data of the various bones. Automate everything!

Remember that it's not torso or ribcage but frame! No torsos here!
Also, yeah, you could call it torso or ribcage instead of frame, but not all of them are torsos or ribcages. All of them Are frames for a skeleton though!

TAG LIST (only include the ones you use):
type - element type (frame,skull,arm,leg,wing,fin,tentacle,tail,mod,finish) Many things rely on the types so be careful!
tstyle - only for frame types, in-game number
name - element name (MUST HAVE)
img_link - full path pls
pvalue - Penny value
sourceTag - Text to signify source (eg. Fate, Ambition, Seasonal etc.)
skullslots, limbslots, tailslots - Slots (used only for frame types)
bskulls, barms, blegs, bwings, bfins, btentacles, btails - Built-in parts (used only for frame types)
ch_lv - Challenge level (base)
ch_nm - Challenge name
ch_ex - Extra text for challenge
antiquity, amalgamy, menace, supportcc, implausibility - Attributes (max)
antiquity_dif, amalgamy_dif, menace_dif, supportcc_dif, implausibility_dif - Attributes (min-difference), when there are challenges, higher minus the lower ('cuz a zero would be false in logistics)
special - Additional text (always displayed last)

Basic order (optional, but more organised if followed):
For Frames: Type, Torso Style, Name, Image, Value, SourceTag, Slots, Built-in parts, Attributes, Special text
For Bones (skulls, limbs and tails): Type, Name, Image, Value, SourceTag, Challange, Challange extra text, Attributes, Special text
For Mods:
For Finishes:

sourceTag: "<span class='fate'>FATE</span>",
*/
const BONEDATA = [
    {
        type: "frame",
        tstyle: 10,
        name: "Headless Skeleton",
        img_link: "images/frame_ph.png",
        pvalue: 250,
        skullslots: 1,
        barms: 2,
        blegs: 2
    },
    {
        type: "frame",
        tstyle: 10,
        name: "Supply a skeleton of your own",
        img_link: "images/frame_ph.png",
        pvalue: 250,
        skullslots: 1,
        barms: 2,
        blegs: 2,
        special: "<span class='rust'>Licentiates</span> only (free)"
    },
    {
        type: "frame",
        tstyle: 15,
        name: "Human Ribcage",
        img_link: "images/frame_ph.png",
        pvalue: 1250,
        skullslots: 1,
        limbslots: 4,
    },
    {
        type: "frame",
        tstyle: 80,
        name: "Prismatic Frame",
        img_link: "images/frame_ph.png",
        pvalue: 31250,
        skullslots: 3,
        limbslots: 3,
        tailslots: 3,
        antiquity: 2,
        amalgamy: 2,
        special: "Requires Your Own Stall 3"
    },
    {
        type: "skull",
        name: "Cap this with a victim’s skull",
        img_link: "images/skull_ph.png",
        pvalue: 250,
        special: "<span class='rust'>Licentiates</span> only (free)"
    },
    {
        type: "skull",
        name: "Carved Ball of Stygian Ivory",
        img_link: "images/skull_ph.png",
        pvalue: 250,
        ch_lv: 6,
        ch_nm: "<span class='green'>Mithridacy</span>",
        ch_ex: "Reduced by 1 per Skull installed",
        implausibility: 2,
        implausibility_dif: 2,
        special: "Reduces <span class='pink'>Skullslots</span>, but doesn't count as a Skull"
    },
    {
        type: "arm",
        name: "Crustacean Pincer",
        img_link: "images/arm_ph.png",
        pvalue: 0,
        menace: 1
    },
    {
        type: "arm",
        name: "Human Arm",
        img_link: "images/arm_ph.png",
        pvalue: 250,
        menace: -1
    },
    {
        type: "leg",
        name: "Helical Thighbone",
        img_link: "images/leg_ph.png",
        pvalue: 300,
        ch_nm: "<span class='orange'>Shapeling Arts</span>",
        ch_lv: 6,
        amalgamy: 2,
        amalgamy_dif: 1,
    },
    {
        type: "wing",
        name: "Bat Wing",
        img_link: "images/wing_ph.png",
        pvalue: 1,
        ch_nm: "<span class='mblue'>Monstrous Anatomy</span>",
        ch_lv: 3,
        ch_ex: "Difficulty increases with fins",
        menace: -1,
        implausibility: 2,
        implausibility_dif: 2
    }
]