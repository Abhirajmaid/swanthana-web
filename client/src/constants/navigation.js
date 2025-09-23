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
    { title: "About Us", href: "/about-us" },
    {
        title: "Treatment & Disorders",
        href: "/treatment",
        subLinks: [
            // Treatments
            { title: "De-Addiction Treatment", href: "/treatment/de-addiction-treatment" },
            { title: "Psychiatric Care", href: "/treatment/psychiatric-care" },
            { title: "Counseling & Therapy", href: "/treatment/counseling-therapy" },
            { title: "Rehabilitation & Life Skills", href: "/treatment/rehabilitation-life-skills" },
            // Disorders
            { title: "Schizophrenia", href: "/disorders/schizophrenia" },
            { title: "Bipolar Disorder", href: "/disorders/bipolar" },
            { title: "Dementia", href: "/disorders/dementia" },
            { title: "Substance Use Disorder", href: "/disorders/addiction" },
            { title: "Emotional & Trauma Recovery", href: "/disorders/trauma" },
        ],
    },
    { title: "Success Stories", href: "/success-stories" },
    {
        title: "Media",
        href: "/media",
        subLinks: [
            { title: "Blogs", href: "/blogs" },
            { title: "Gallery", href: "/gallery" },
            { title: "Annual Report", href: "/annual-report" },
        ],
    },
    { title: "Visitors", href: "/visitors" },
    { title: "Contact Us", href: "/contact-us" },
];