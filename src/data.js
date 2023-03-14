
export const COMMODITY_TYPE = [
    {
        code: "",
        category: "",
        description: "Freight all kinds",
        level: 0,
        class: "_1"
    },
    {
        code: "",
        category: "",
        description: "Personal",
        level: 0,
        class: "_2"
    },
    {
        code: "01-05",
        category: "01-05",
        description: "Animal & Animal Products",
        level: 0,
        class: "_3"
    },
    {
        code: "06-14",
        category: "06-14",
        description: "Vegetable Products",
        level: 0,
        class: "_4"
    },
    {
        code: "15-15",
        category: "15-15",
        description: "Animal and Vegetable Fats and Oils",
        level: 0,
        class: "_5"
    },
    {
        code: "16-24",
        category: "16-24",
        description: "Foodstuffs, Beverages and Tobacco",
        level: 0,
        class: "_6"
    },
    {
        code: "25-27",
        category: "25-27",
        description: "Mineral Products",
        level: 0,
        class: "_7"
    },
    {
        code: "28-38",
        category: "28-38",
        description: "Chemicals & Allied Industries",
        level: 0,
        class: "_8"
    },
    {
        code: "39-40",
        category: "39-40",
        description: "Plastics/Rubbers",
        level: 0,
        class: "_9"
    },
    {
        code: "41-43",
        category: "41-43",
        description: "Raw Hides, Skins, Leather, & Furs",
        level: 0,
        class: "_10"
    },
    {
        code: "44-46",
        category: "44-46",
        description: "Wood & Wood Products",
        level: 0,
        class: "_11"
    },
    {
        code: "47-49",
        category: "47-49",
        description: "Pulp of Wood and Fibrous Material",
        level: 0,
        class: "_12"
    },
    {
        code: "50-63",
        category: "50-63",
        description: "Textiles",
        level: 0,
        class: "_13"
    },
    {
        code: "64-67",
        category: "64-67",
        description: "Footwear/Headgear",
        level: 0,
        class: "_14"
    },
    {
        code: "68-70",
        category: "68-70",
        description: "Stone/Glass",
        level: 0,
        class: "_15"
    },
    {
        code: "71-71",
        category: "71-71",
        description: "Precious Stone, Metal, Pearls and Coins",
        level: 0,
        class: "_16"
    },
    {
        code: "72-83",
        category: "72-83",
        description: "Base Metals",
        level: 0,
        class: "_17"
    },
    {
        code: "84-85",
        category: "84-85",
        description: "Machinery/Electrical",
        level: 0,
        class: "_18"
    },
    {
        code: "86-89",
        category: "86-89",
        description: "Transportation",
        level: 0,
        class: "_19"
    },
    {
        code: "90-92",
        category: "90-92",
        description: "Precision Instruments",
        level: 0,
        class: "_20"
    },
    {
        code: "93-93",
        category: "93-93",
        description: "Arms and Ammunition",
        level: 0,
        class: "_21"
    },
    {
        code: "94-96",
        category: "94-96",
        description: "Miscellaneous Manufactured Articles",
        level: 0,
        class: "_22"
    },
    {
        code: "97-97",
        category: "97-97",
        description: "Works of Art",
        level: 0,
        class: "_23"
    },
    {
        code: "98-99",
        category: "98-99",
        description: "Unique US National HS Codes",
        level: 0,
        class: "_24"
    }
]

export const TRANSPORTATION_DATA = [
    {
        options: [
            {
                icon: "boat",
                suboptions: [
                    { title: "SEA" },
                    { name: "Full container load", shortForm: "FCL", disabled: false },
                    { name: "Less container load", shortForm: "LCL", disabled: false },
                    { name: "Bulk", shortForm: null, disabled: false }
                ]
            }
        ]
    },
    {
        options: [
            {
                icon: "truck",
                suboptions: [
                    { title: "ROAD" },
                    { name: "Full container load", shortForm: "FCL", disabled: false },
                    { name: "Full truck load", shortForm: "FTL", disabled: false },
                    { name: "Less truck load", shortForm: "LTL", disabled: false }
                ]
            },
            {
                icon: "wagon",
                suboptions: [
                    { title: "RAIL" },
                    { name: "Full container load", shortForm: "FCL", disabled: true },
                    { name: "Full wagon load", shortForm: "FWL", disabled: false },
                    { name: "Less wagon load", shortForm: "LWL", disabled: true },
                    { name: "Full truck load", shortForm: "FTL", disabled: true },
                ]
            }
        ]
    },
    {
        options: [
            {
                icon: "plane",
                suboptions: [
                    { title: "AIR" },
                    { name: "Standard cargo", shortForm: "", disabled: false },
                    { name: "ULD container", shortForm: "", disabled: false },
                ]
            }
        ]
    },
]

export const CONTAINER_TYPE = [
    "20' Standard",
    "40' Standard",
    "40' High-Cube",
    "20' Refrigerated",
    "40' Refrigerated",
    "20' Open Top",
    "40' Open Top",
    "20' Flatrack",
    "40' Flatrack",
    "20' Tank",
    "40' Flatrack Collapsible",
    "20' Flatrack Collapsible",
    "20' Platform",
    "40' Platform",
    "20' Bulk",
    "45' High-Cube",
    "10' Standard"
]

export const IMO_CLASS = [
    "1.1 Explosives with a mass explosion hazard",
    "1.2 Explosives with a severe projection hazard",
    "1.3 Explosives with a fire",
    "1.4 Minor fire or projection hazard",
    "1.5 An insensitive substance with a mass explosion hazard",
    "1.6 Extremely insensitive articles",
    "2.1 Flammable Gas",
    "2.2 Non-flammable, Non-poisonus Gas",
    "2.3 Oxygen Gas",
    "2.4 Poison Gas",
    "3 Flammable Liquid",
    "4.1 Flammable Solids or Substances",
    "4.2 Flammable solids",
    "4.3 Substances which, in contact with water, emit flammable gases",
    "5.1 Oxidizing substances (agents) by yielding oxygen increase the risk and intensity of fire",
    "5.2 Organic peroxides - most will burn rapidly and are sensitive to impact or friction",
    "6.1 Toxic substances",
    "6.2 Infectious substances",
    "7 Radioactive Substances",
    "8 Corrosives",
    "9 Miscellaneous dangerous substances and articles"
]

export const SHIPPING_TYPE = [
    "Bulk Carriers",
    "Containerships",
    "General cargo",
    "Product tankers / Asphalt carriers",
    "Product tankers / Chemical tankers",
    "Product tankers / Crude carriers",
    "Product tankers / Gas carriers",
    "Specialized / Heavy-lift",
    "Specialized / Livestock",
    "Specialized / Refrigerated",
    "Specialized / RoRo",
    "Specialized / Wood chip"
]

export const TRUCK_TYPE = [
    "2т - 14м³",
    "3.5т - 35м³",
    "3.75т - 50м³",
    "Autocart",
    "Container",
    "Dump",
    "Flatbed",
    "Grain",
    "Heavy loaders",
    "Isoterm",
    "Jumbo 100м³",
    "Jumbo 120м³",
    "Logging & Pipes",
    "Mega trailer 100м³",
    "Refrigerator",
    "Road trains",
    "Semitrailer",
    "Tanker",
    "Tautliner",
    "Tilt",
    "Tilt 120м³",
    "Tilt 82м³",
    "Tilt 92м³"
]

export const WAGON_TYPE = [
    "Closed wagon",
    "Container platform",
    "Cover",
    "Flat wagon",
    "Freight wagon",
    "High side wagon",
    "Hopper wagon",
    "Platform",
    "Side dump wagon",
    "Tank wagon"
]

// const HS_CODES = [
//     {
//         "code": "01-05",
//         "category": "01-05",
//         "level": 0,
//         "description": "Animal & Animal Products",
//         "parents": null
//     },
//     {
//         "code": "06-14",
//         "category": "06-14",
//         "level": 0,
//         "description": "Vegetable Products",
//         "parents": null
//     },
//     {
//         "code": "15-15",
//         "category": "15-15",
//         "level": 0,
//         "description": "Animal and Vegetable Fats and Oils",
//         "parents": null
//     },
//     {
//         "code": "16-24",
//         "category": "16-24",
//         "level": 0,
//         "description": "Foodstuffs, Beverages and Tobacco",
//         "parents": null
//     },
//     {
//         "code": "25-27",
//         "category": "25-27",
//         "level": 0,
//         "description": "Mineral Products",
//         "parents": null
//     },
//     {
//         "code": "28-38",
//         "category": "28-38",
//         "level": 0,
//         "description": "Chemicals & Allied Industries",
//         "parents": null
//     },
//     {
//         "code": "39-40",
//         "category": "39-40",
//         "level": 0,
//         "description": "Plastics/Rubbers",
//         "parents": null
//     },
//     {
//         "code": "41-43",
//         "category": "41-43",
//         "level": 0,
//         "description": "Raw Hides, Skins, Leather, & Furs",
//         "parents": null
//     },
//     {
//         "code": "44-46",
//         "category": "44-46",
//         "level": 0,
//         "description": "Wood & Wood Products",
//         "parents": null
//     },
//     {
//         "code": "47-49",
//         "category": "47-49",
//         "level": 0,
//         "description": "Pulp of Wood and Fibrous Material",
//         "parents": null
//     },
//     {
//         "code": "50-63",
//         "category": "50-63",
//         "level": 0,
//         "description": "Textiles",
//         "parents": null
//     },
//     {
//         "code": "64-67",
//         "category": "64-67",
//         "level": 0,
//         "description": "Footwear/Headgear",
//         "parents": null
//     },
//     {
//         "code": "68-70",
//         "category": "68-70",
//         "level": 0,
//         "description": "Stone/Glass",
//         "parents": null
//     },
//     {
//         "code": "71-71",
//         "category": "71-71",
//         "level": 0,
//         "description": "Precious Stone, Metal, Pearls and Coins",
//         "parents": null
//     },
//     {
//         "code": "72-83",
//         "category": "72-83",
//         "level": 0,
//         "description": "Base Metals",
//         "parents": null
//     },
//     {
//         "code": "84-85",
//         "category": "84-85",
//         "level": 0,
//         "description": "Machinery/Electrical",
//         "parents": null
//     },
//     {
//         "code": "86-89",
//         "category": "86-89",
//         "level": 0,
//         "description": "Transportation",
//         "parents": null
//     },
//     {
//         "code": "90-92",
//         "category": "90-92",
//         "level": 0,
//         "description": "Precision Instruments",
//         "parents": null
//     },
//     {
//         "code": "93-93",
//         "category": "93-93",
//         "level": 0,
//         "description": "Arms and Ammunition",
//         "parents": null
//     },
//     {
//         "code": "94-96",
//         "category": "94-96",
//         "level": 0,
//         "description": "Miscellaneous Manufactured Articles",
//         "parents": null
//     },
//     {
//         "code": "97-97",
//         "category": "97-97",
//         "level": 0,
//         "description": "Works of Art",
//         "parents": null
//     },
//     {
//         "code": "98-99",
//         "category": "98-99",
//         "level": 0,
//         "description": "Unique US National HS Codes",
//         "parents": null
//     },
//     {
//         "code": "01",
//         "category": "01-05",
//         "level": 1,
//         "description": "Animals, live",
//         "parents": null
//     },
//     {
//         "code": "02",
//         "category": "01-05",
//         "level": 1,
//         "description": "Meat and edible meat offal",
//         "parents": null
//     },
//     {
//         "code": "03",
//         "category": "01-05",
//         "level": 1,
//         "description": "Fish and crustaceans, molluscs and other aquatic invertebrates",
//         "parents": null
//     },
//     {
//         "code": "04",
//         "category": "01-05",
//         "level": 1,
//         "description": "Dairy produce, birds' eggs, natural honey, edible products of animal origin, not elsewhere specified or included",
//         "parents": null
//     },
//     {
//         "code": "05",
//         "category": "01-05",
//         "level": 1,
//         "description": "Animal originated products, not elsewhere specified or included",
//         "parents": null
//     },
//     {
//         "code": "0101",
//         "category": "01-05",
//         "level": 2,
//         "description": "Horses, asses, mules and hinnies, live",
//         "parents": null
//     },
//     {
//         "code": "0102",
//         "category": "01-05",
//         "level": 2,
//         "description": "Bovine animals, live",
//         "parents": null
//     },
//     {
//         "code": "0103",
//         "category": "01-05",
//         "level": 2,
//         "description": "Swine, live",
//         "parents": null
//     },
//     {
//         "code": "0104",
//         "category": "01-05",
//         "level": 2,
//         "description": "Sheep and goats, live",
//         "parents": null
//     },
//     {
//         "code": "0105",
//         "category": "01-05",
//         "level": 2,
//         "description": "Poultry, live, fowls of the species Gallus domesticus, ducks, geese, turkeys and guinea fowls",
//         "parents": null
//     },
//     {
//         "code": "0106",
//         "category": "01-05",
//         "level": 2,
//         "description": "Animals, live, n.e.c. in chapter 01",
//         "parents": null
//     },
//     {
//         "code": "010121",
//         "category": "01-05",
//         "level": 3,
//         "description": "Horses, live, pure-bred breeding animals",
//         "parents": null
//     },
//     {
//         "code": "010129",
//         "category": "01-05",
//         "level": 3,
//         "description": "Horses, live, other than pure-bred breeding animals",
//         "parents": null
//     },
//     {
//         "code": "010130",
//         "category": "01-05",
//         "level": 3,
//         "description": "Asses, live",
//         "parents": null
//     },
//     {
//         "code": "010190",
//         "category": "01-05",
//         "level": 3,
//         "description": "Mules and hinnies, live",
//         "parents": null
//     }

// ]