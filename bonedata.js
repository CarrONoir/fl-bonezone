/*Array or objects for the data of the various bones. Automate everything!

Remember that it's not torso or ribcage but frame! No torsos here!
Also, yeah, you could call it torso or ribcage instead of frame, but not all of them are torsos or ribcages. All of them Are frames for a skeleton though!

TAG LIST (only include the ones you use):
type - element type (frame,skull,arm,leg,wing,fin,tentacle,tail,mod,finish) Many things rely on the types so be careful!
tstyle - only for frame types, in-game number
name - element name (MUST HAVE)
img_link - full path pls
pvalue - Penny value (max)
pvalue_dif - for bones that can have differing values (this is the difference)
sourceTag - Text to signify source (eg. Fate, Ambition, Seasonal etc.)
skullslots, limbslots, tailslots - Slots (used only for frame types)
bskulls, barms, blegs, bwings, bfins, btentacles, btails - Built-in parts (used only for frame types)
ch_lv - Challenge level (base)
ch_nm - Challenge name
ch_nms - Shortened challange name
ch_ex - Extra text for challenge
antiquity, amalgamy, menace, supportcc, implausibility - Attributes (max)
antiquity_dif, amalgamy_dif, menace_dif, supportcc_dif, implausibility_dif - Attributes (min-difference), when there are challenges, higher minus the lower ('cuz a zero would be false in logistics)
exhaustion - Exhaustion added by adding part (currently only at Custom-Engraved Skulls)
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
        tstyle: 20,
        name: "Thorned Ribcage",
        img_link: "images/frame_ph.png",
        pvalue: 1250,
        skullslots: 1,
        limbslots: 4,
        tailslots: 1,
        menace: 1,
        amalgamy: 1
    },
    {
        type: "frame",
        tstyle: 30,
        name: "Skeleton with Seven Necks",
        img_link: "images/frame_ph.png",
        pvalue: 6250,
        skullslots: 7,
        limbslots: 2,
        blegs: 2,
        menace: 1,
        amalgamy: 2
    },
    {
        type: "frame",
        tstyle: 40,
        name: "Flourishing Ribcage",
        img_link: "images/frame_ph.png",
        pvalue: 1250,
        skullslots: 2,
        limbslots: 6,
        tailslots: 1,
        amalgamy: 2
    },
    {
        type: "frame",
        tstyle: 50,
        name: "Mammoth Ribcage",
        img_link: "images/frame_ph.png",
        pvalue: 6250,
        skullslots: 1,
        limbslots: 4,
        tailslots: 1,
        antiquity: 2,
        special: "Requires Your Own Stall 3 (lv2)"
    },
    {
        type: "frame",
        tstyle: 60,
        name: "Ribcage with a Bouquet of Eight Spines",
        img_link: "images/frame_ph.png",
        pvalue: 31250,
        skullslots: 8,
        limbslots: 4,
        tailslots: 1,
        menace: 2,
        amalgamy: 1
    },
    {
        type: "frame",
        tstyle: 70,
        name: "Leviathan Frame",
        img_link: "images/frame_ph.png",
        pvalue: 31250,
        skullslots: 1,
        limbslots: 2,
        btails: 1,
        antiquity: 1,
        menace: 1,
        special: "Requires Your Own Stall 5 (lv3)"
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
        special: "Requires Your Own Stall 3 (lv2)"
    },
    {
        type: "frame",
        tstyle: 100,
        name: "Five-Pointed Ribcage",
        img_link: "images/frame_ph.png",
        pvalue: 31250,
        sourceTag: "<span class='fate'>FATE</span>",
        skullslots: 5,
        limbslots: 5,
        amalgamy: 2,
        menace: 1
    },
    {
        type: "skull",
        name: "Cap this with a victim???s skull",
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
        ch_nms: "<span class='green'>Mi</span>",
        ch_ex: "Reduced by 1 per Skull installed",
        implausibility: 2,
        implausibility_dif: 2,
        special: "Reduces <span class='pink'>Skullslots</span>, but doesn't count as a Skull"
    },
    {
        type: "skull",
        name: "Rubbery Skull",
        img_link: "images/skull_ph.png",
        pvalue: 600,
        sourceTag: "<span class='fate'>FATE</span>",
        ch_nm: "<span class='orange'>Shapeling Arts</span>",
        ch_nms: "<span class='orange'>SA</span>",
        ch_lv: 1,
        amalgamy: 1
    },
    {
        type: "skull",
        name: "Horned Skull",
        img_link: "images/skull_ph.png",
        pvalue: 1250,
        ch_nm: "<span class='mblue'>Monstrous Anatomy</span>",
        ch_nms: "<span class='mblue'>MA</span>",
        ch_lv: 6,
        antiquity: 1,
        menace: 2,
        menace_dif: 1
    },
    {
        type: "skull",
        name: "Pentagrammic Skull",
        img_link: "images/skull_ph.png",
        pvalue: 1250,
        sourceTag: "<span class='fate'>FATE</span>",
        ch_nm: "<span class='mblue'>Monstrous Anatomy</span>",
        ch_nms: "<span class='mblue'>MA</span>",
        ch_lv: 6,
        amalgamy: 2,
        amalgamy_dif: 1,
        menace: 1
    },
    {
        type: "skull",
        name: "Counterfeit Head of John the Baptist",
        img_link: "images/skull_ph.png",
        pvalue: 1250,
        ch_nm: "<span class='red'>Artisan of the Red Science</span>",
        ch_nms: "<span class='red'>AotRS</span>",
        ch_lv: 6,
        supportcc: 1,
        special: "Also costs 10 x Peppercaps and 500 x Fragments"
    },
    {
        type: "skull",
        name: "Skull in Coral",
        img_link: "images/skull_ph.png",
        pvalue: 1750,
        ch_nm: "<span class='orange'>Shapeling Arts</span>",
        ch_nms: "<span class='orange'>SA</span>",
        ch_lv: 8,
        ch_ex: "Every point of <span class='orange'>Amalgamy</span> reduces difficulty by 5",
        amalgamy: 2,
        amalgamy_dif: 1,
        implausibility: 1,
        implausibility_dif: 1,
        special: "Also costs 1 x Knob of Scintillack"
    },
    {
        type: "skull",
        name: "Plated Skull",
        img_link: "images/skull_ph.png",
        pvalue: 2500,
        ch_nm: "<span class='mblue'>Monstrous Anatomy</span>",
        ch_nms: "<span class='mblue'>MA</span>",
        ch_lv: 4,
        menace: 2,
        menace_dif: 1
    },
    {
        type: "skull",
        name: "Eyeless Skull",
        img_link: "images/skull_ph.png",
        pvalue: 3000,
        ch_nm: "<span class='mblue'>Monstrous Anatomy</span>",
        ch_nms: "<span class='mblue'>MA</span>",
        ch_lv: 6,
        menace: 2,
        menace_dif: 1
    },
    {
        type: "skull",
        name: "Doubled Skull",
        img_link: "images/skull_ph.png",
        pvalue: 6250,
        ch_nm: "<span class='mblue'>Monstrous Anatomy</span>",
        ch_nms: "<span class='mblue'>MA</span>",
        ch_lv: 4,
        antiquity: 2,
        antiquity_dif: 1,
        amalgamy: 1,
        special: "Adds 2 Skulls while only using one <span class='pink'>Skullslot</span>"
    },
    {
        type: "skull",
        name: "Sabre-toothed Skull",
        img_link: "images/skull_ph.png",
        pvalue: 6250,
        ch_nm: "<span class='mblue'>Monstrous Anatomy</span>",
        ch_nms: "<span class='mblue'>MA</span>",
        ch_lv: 6,
        antiquity: 1,
        menace: 1,
        menace_dif: 1
    },
    {
        type: "skull",
        name: "Bright Brass Skull",
        img_link: "images/skull_ph.png",
        pvalue: 6500,
        pvalue_dif: 500,
        ch_nm: "<span class='green'>Mithridacy</span>",
        ch_nms: "<span class='green'>Mi</span>",
        ch_lv: 6,
        implausibility: 6,
        implausibility_dif: 4,
        special: "Also costs 200 x Brass on success"
    },
    {
        type: "skull",
        name: "Severed Chimaerical Head of the Vake",
        img_link: "images/skull_ph.png",
        pvalue: 6500,
        sourceTag: "<span class='green' style='font-weight:bold'>AMBITION: BaL!</span>",
        ch_nm: "<span class='red'>Artisan of the Red Science</span>",
        ch_nms: "<span class='red'>AotRS</span>",
        ch_lv: 6,
        menace: 3,
        special: "Also costs 6000 x Fragments on success"
    },
    {
        type: "skull",
        name: "A Custom-Engraved Skull",
        img_link: "images/skull_ph.png",
        pvalue: 10000,
        sourceTag: "<span class='feastrose'>FEAST OF THE ROSE</span>",
        implausibility: 2,
        implausibility_dif: 2,
        exhaustion: 2
    },
    {
        type: "skull",
        name: "Your Own Severed Head",
        img_link: "images/skull_ph.png",
        pvalue: -250,
        sourceTag: "<span class='grey' style='font-weight:bold'>SMEN</span>",
        ch_nm: "<span class='red'>Artisan of the Red Science</span>",
        ch_nms: "<span class='red'>AotRS</span>",
        ch_lv: 6,
        special: "Also costs 1000 x Fragments on success"
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
        name: "Knotted Humerus",
        img_link: "images/arm_ph.png",
        pvalue: 300,
        pvalue_dif: 290,
        ch_nm: "<span class='green'>Mithridacy</span>",
        ch_lv: 6,
        ch_ex: "Difficulty increases by 1 per non-Knotted Humerus limb",
        amalgamy: 1,
        implausibility: 2,
        implausibility_dif: 2
    },
    {
        type: "arm",
        name: "Human Arm",
        img_link: "images/arm_ph.png",
        pvalue: 250,
        menace: -1
    },
    {
        type: "arm",
        name: "Ivory Humerus",
        img_link: "images/arm_ph.png",
        pvalue: 1500,
        ch_nm: "<span class='rust'>Kataleptic Toxicology</span>",
        ch_lv: 6,
        implausibility: 2,
        implausibility_dif: 2
    },
    {
        type: "arm",
        name: "Fossilised Forelimb",
        img_link: "images/arm_ph.png",
        pvalue: 2750,
        ch_nm: "<span class='mblue'>Monstrous Anatomy</span>",
        ch_lv: 11,
        antiquity: 2,
        antiquity_dif: 1
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