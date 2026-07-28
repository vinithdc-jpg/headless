import {
    Phone,
    ShieldAlert,
    Mail,
    MapPin,
} from "lucide-react";

export const contactInfo = [
    {
        id: 1,
        icon: Phone,
        title: "General Enquiries",
        heading: "+44 20 7123 4567",
        description: "Monday – Friday | 8:30 AM – 6:00 PM",
    },
    {
        id: 2,
        icon: ShieldAlert,
        title: "Emergency Claims",
        heading: "+44 20 7123 4568",
        description: "Available 24 Hours",
        featured: true,
    },
    {
        id: 3,
        icon: Mail,
        title: "Email Us",
        heading: "enquiries@meridian.co.uk",
        description: "Response within 2 business hours",
    },
    {
        id: 4,
        icon: MapPin,
        title: "Head Office",
        heading: "One Canada Square",
        description: "Canary Wharf, London E14 5AB",
    },
];