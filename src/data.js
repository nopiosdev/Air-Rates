export const data = [
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

export const Transportion_Data = [
    {
        options: [
            {
                icon: "./boat.svg",
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
                icon: "./truck-solid.svg",
                suboptions: [
                    { title: "ROAD" },
                    { name: "Full container load", shortForm: "FCL", disabled: false },
                    { name: "Full truck load", shortForm: "FTL", disabled: false },
                    { name: "Less truck load", shortForm: "LTL", disabled: false }
                ]
            },
            {
                icon: "./wagon.svg",
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
                icon: "./plane-solid.svg",
                suboptions: [
                    { title: "AIR" },
                    { name: "Standard cargo", shortForm: "", disabled: false },
                    { name: "ULD container", shortForm: "", disabled: false },
                ]
            }
        ]
    },
]

export const Container_Type = [
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