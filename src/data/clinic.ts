export interface ClinicInfo {
  doctorName: string;
  professionalTitle: string;
  credentials: string;
  category: string;
  address: {
    line1: string;
    line2: string;
    landmark: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
  };
  plusCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsShareUrl: string;
  googleMapsEmbedQuery: string;
  hoursNote: string;
  defaultSchedule: { day: string; hours: string }[];
  phone: {
    display: string;
    raw: string;
    isPlaceholder: boolean;
  };
  whatsapp: {
    display: string;
    raw: string;
    message: string;
    isPlaceholder: boolean;
  };
  email: {
    display: string;
    isPlaceholder: boolean;
  };
  registrationNumber: {
    number: string;
    council: string;
    isPlaceholder: boolean;
  };
  rating: {
    score: number;
    reviewCount: number;
    ratingText: string;
  };
  socials: {
    instagram: string;
    linkedin: string;
    googleMaps: string;
  };
}

export const clinicData: ClinicInfo = {
  doctorName: "Dr. Harshitha Jain",
  professionalTitle: "MBBS (Gold Medalist), Functional Medicine Physician",
  credentials: "MBBS (Gold Medalist) • Integrative & Functional Medicine",
  category: "Doctor / Functional Medicine Clinic",
  address: {
    line1: "First Floor, Meridian Medical Centre",
    line2: "3/4, Armugam Circle",
    landmark: "Above Shah Medicals",
    locality: "Basavanagudi",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560004",
    fullFormatted: "First Floor, Meridian Medical Centre, 3/4, Armugam Circle, above Shah Medicals, Basavanagudi, Bengaluru, Karnataka 560004"
  },
  plusCode: "WHQH+X4 Bengaluru, Karnataka",
  coordinates: {
    lat: 12.9399182,
    lng: 77.5778728
  },
  googleMapsShareUrl: "https://maps.google.com/?q=12.9399182,77.5778728",
  googleMapsEmbedQuery: "Meridian+Medical+Centre+Armugam+Circle+Basavanagudi+Bengaluru",
  hoursNote: "Monday to Friday: 5:30 PM – 8:00 PM | Saturday: 10:00 AM – 2:00 PM | Sunday: Closed (Consultations by prior appointment)",
  defaultSchedule: [
    { day: "Monday", hours: "5:30 PM – 8:00 PM" },
    { day: "Tuesday", hours: "5:30 PM – 8:00 PM" },
    { day: "Wednesday", hours: "5:30 PM – 8:00 PM" },
    { day: "Thursday", hours: "5:30 PM – 8:00 PM" },
    { day: "Friday", hours: "5:30 PM – 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  phone: {
    display: "+91 99012 44674",
    raw: "+919901244674",
    isPlaceholder: false
  },
  whatsapp: {
    display: "+91 99012 44674",
    raw: "919901244674",
    message: "Hello Dr. Harshitha, I would like to enquire about a Functional Medicine consultation.",
    isPlaceholder: false
  },
  email: {
    display: "contact@drharshithajain.in",
    isPlaceholder: false
  },
  registrationNumber: {
    number: "Registered Physician • Karnataka Medical Council",
    council: "Karnataka Medical Council",
    isPlaceholder: false
  },
  rating: {
    score: 5.0,
    reviewCount: 6,
    ratingText: "5.0 out of 5.0 (6 Verified Reviews on Google)"
  },
  socials: {
    instagram: "https://www.instagram.com/doctorharshitha/?hl=en",
    linkedin: "https://in.linkedin.com/in/doctorharshitha",
    googleMaps: "https://maps.google.com/?q=12.9399182,77.5778728"
  }
};
