/**
 * @typedef {Object} SubLink
 * @property {string} title - The title of the sub-link
 * @property {string} href - The URL of the sub-link
 */

/**
 * @typedef {Object} NavLink
 * @property {string} title - The title of the navigation link
 * @property {string} href - The URL of the navigation link
 * @property {SubLink[]} [subLinks] - Optional sub-links for dropdown menus
 */

/** @type {NavLink[]} */
export const navLinks = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    {
        title: "Treatments",
        href: "/treatment",
        subLinks: [
            { title: "Physiotherapy", href: "/treatment/physiotherapy" },
            { title: "Speech Therapy", href: "/treatment/speech-therapy" },
            { title: "Occupational Therapy", href: "/treatment/occupational-therapy" },
            { title: "Developmental Therapy", href: "/treatment/developmental-therapy" },
            // Add more treatments as needed
        ],
    },
    { title: "Gallery", href: "/gallery" },
    {
        title: "Disorders",
        href: "/disorders",
        subLinks: [
            { title: "Autism Spectrum Disorder", href: "/disorders/autism-spectrum" },
            { title: "Cerebral Palsy", href: "/disorders/cerebral-palsy" },
            { title: "Down Syndrome", href: "/disorders/down-syndrome" },
            { title: "ADHD", href: "/disorders/adhd" },
            // Add more disorders as needed
        ],
    },
    { title: "Doctors", href: "/doctors" },
    { title: "Events", href: "/events" },
    { title: "Contact Us", href: "/contact-us" },
];