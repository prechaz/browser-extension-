import { extension } from "@/type";
import devlens from '../../public/images/logo-devlens.svg'
import stylespy from "../../public/images/logo-style-spy.svg"
import speed  from "../../public/images/logo-speed-boost.svg"
import json  from "../../public/images/logo-json-wizard.svg"
import markup from "../../public/images/logo-markup-notes.svg"
import master from "../../public/images/logo-tab-master-pro.svg"
import viewport from "../../public/images/logo-viewport-buddy.svg"
import console from "../../public/images/logo-console-plus.svg"
import pallete from "../../public/images/logo-palette-picker.svg"
import grid from "../../public/images/logo-grid-guides.svg"
import link from "../../public/images/logo-link-checker.svg"
import dom from "../../public/images/logo-dom-snapshot.svg"



export const extensionsData:extension[] =[
    {
        logo: devlens,
        name: "DevLens",
        description: "Quickly inspect page layouts and visualize element boundaries.",
        isActive: true
    },
    {
        logo: stylespy ,
        name: "StyleSpy",
        description: "Instantly analyze and copy CSS from any webpage element.",
        isActive: true
    },
    {
        logo: speed,
        name: "SpeedBoost",
        description: "Optimizes browser resource usage to accelerate page loading.",
        isActive: false
    },
    {
        logo: json,
        name: "JSONWizard",
        description: "Formats, validates, and prettifies JSON responses in-browser.",
        isActive: true
    },
    {
        logo: master,
        name: "TabMaster Pro",
        description: "Organizes browser tabs into groups and sessions.",
        isActive: true
    },
    {
        logo: viewport,
        name: "ViewportBuddy",
        description: "Simulates various screen resolutions directly within the browser.",
        isActive: false
    },
    {
        logo: markup,
        name: "Markup Notes",
        description: "Enables annotation and notes directly onto webpages for collaborative debugging.",
        isActive: true
    },
    {
        logo: grid,
        name: "GridGuides",
        description: "Overlay customizable grids and alignment guides on any webpage.",
        isActive: false
    },
    {
        logo: pallete,
        name: "Palette Picker",
        description: "Instantly extracts color palettes from any webpage.",
        isActive: true
    },
    {
        logo:  link ,
        name: "LinkChecker",
        description: "Scans and highlights broken links on any page.",
        isActive: true
    },
    {
        logo: dom ,
        name: "DOM Snapshot",
        description: "Capture and export DOM structures quickly.",
        isActive: false
    },
    {
        logo: console,
        name: "ConsolePlus",
        description: "Enhanced developer console with advanced filtering and logging.",
        isActive: true
    }
  ]