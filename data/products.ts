import { PiEar, PiBatteryHigh, PiPlugs, PiWaveform } from "react-icons/pi";

export const products = [
  // Hearing Aids
  {
    id: "phonak-audeo-lumity",
    name: "Phonak Audéo Lumity",
    category: "Receiver-in-Canal",
    price: "Rs. 45,000",
    image: "/products/phonak.png",
    description:
      "Experience conversations with unmatched clarity. The Phonak Audéo Lumity focuses on speech understanding in noisy environments.",
    features: [
      {
        icon: PiWaveform,
        title: "SmartSpeech Technology",
        desc: "Improves speech understanding in noise.",
      },
      {
        icon: PiEar,
        title: "Universal Connectivity",
        desc: "Connects to smartphones and TV.",
      },
      {
        icon: PiBatteryHigh,
        title: "Rechargeable",
        desc: "All-day hearing on a single charge.",
      },
    ],
    specs: [
      { label: "Type", value: "RIC (Receiver-in-Canal)" },
      { label: "Battery", value: "Lithium-ion Rechargeable" },
      { label: "Bluetooth", value: "Yes (iOS & Android)" },
      { label: "Water Resistance", value: "IP68" },
    ],
  },
  {
    id: "oticon-real",
    name: "Oticon Real",
    category: "Invisible-in-Canal",
    price: "Rs. 52,000",
    image: "/products/oticon.png",
    description:
      "Oticon Real gives you back the real sounds of life. Designed to handle sudden disruptive sounds while keeping speech clear.",
    features: [
      {
        icon: PiWaveform,
        title: "RealSound Technology",
        desc: "Balances sudden soft and loud sounds.",
      },
      {
        icon: PiEar,
        title: "BrainHearing",
        desc: "Supports how your brain processes sound.",
      },
      {
        icon: PiBatteryHigh,
        title: "Long Battery Life",
        desc: "Efficient power management.",
      },
    ],
    specs: [
      { label: "Type", value: "IIC (Invisible-in-Canal)" },
      { label: "Battery", value: "Size 10" },
      { label: "Bluetooth", value: "Optional Streamer" },
      { label: "Water Resistance", value: "IP68" },
    ],
  },
  {
    id: "starkey-genesis-ai",
    name: "Starkey Genesis AI",
    category: "Behind-the-Ear",
    price: "Rs. 48,000",
    image: "/products/starkey.png",
    description:
      "The biggest leap forward in hearing technology. Genesis AI mimics the cerebral cortex to process sounds the way a 'normal' brain does.",
    features: [
      {
        icon: PiWaveform,
        title: "Neuro Processor",
        desc: "4x faster processing speed.",
      },
      {
        icon: PiEar,
        title: "Edge Mode+",
        desc: "AI-based on-demand adjustments.",
      },
      {
        icon: PiBatteryHigh,
        title: "51 Hours Battery",
        desc: "Industry-leading rechargeable life.",
      },
    ],
    specs: [
      { label: "Type", value: "BTE (Behind-the-Ear)" },
      { label: "Battery", value: "Rechargeable" },
      { label: "Bluetooth", value: "Yes (LE Audio)" },
      { label: "Water Resistance", value: "IP68" },
    ],
  },

  // Pocket Hearing Aids
  {
    id: "pocket-aid-basic",
    name: "Pocket Master 100",
    category: "Pocket Hearing Aids",
    price: "Rs. 8,500",
    image: "/products/pocket-1.png", // Placeholder
    description:
      "Reliable and powerful amplification in a durable pocket-sized design. Ideal for those with dexterity challenges.",
    features: [
      {
        icon: PiWaveform,
        title: "High Power",
        desc: "Suitable for severe hearing loss.",
      },
      {
        icon: PiEar,
        title: "Easy Controls",
        desc: "Large volume and tone wheels.",
      },
      {
        icon: PiBatteryHigh,
        title: "AA Battery",
        desc: "Uses standard AA batteries.",
      },
    ],
    specs: [
      { label: "Type", value: "Body Worn" },
      { label: "Battery", value: "AA" },
      { label: "Bluetooth", value: "No" },
      { label: "Water Resistance", value: "No" },
    ],
  },
  {
    id: "pocket-aid-pro",
    name: "Pocket Pro Digital",
    category: "Pocket Hearing Aids",
    price: "Rs. 12,000",
    image: "/products/pocket-2.png", // Placeholder
    description:
      "Digital sound processing in a robust pocket format. Offers clearer sound quality than traditional analog pocket aids.",
    features: [
      {
        icon: PiWaveform,
        title: "Digital Chip",
        desc: "Noise reduction capabilities.",
      },
      {
        icon: PiEar,
        title: "Dual Trimmers",
        desc: "Adjustable low/high frequencies.",
      },
      {
        icon: PiBatteryHigh,
        title: "Long Life",
        desc: "Weeks of use on one battery.",
      },
    ],
    specs: [
      { label: "Type", value: "Body Worn" },
      { label: "Battery", value: "AA" },
      { label: "Bluetooth", value: "No" },
      { label: "Water Resistance", value: "No" },
    ],
  },

  // Accessories
  {
    id: "battery-312",
    name: "Rayovac Size 312",
    category: "Accessories",
    subcategory: "Batteries",
    price: "Rs. 600 / pack",
    image: "/products/acc-battery.png", // Placeholder
    description:
      "Long-lasting mercury-free hearing aid batteries. Size 312 (Brown tab).",
    features: [],
    specs: [],
  },
  {
    id: "wax-guard",
    name: "CeruShield Disk",
    category: "Accessories",
    subcategory: "Maintenance",
    price: "Rs. 1,200",
    image: "/products/acc-wax.png", // Placeholder
    description:
      "Wax filters for Phonak RIC hearing aids. Prevents wax from damaging the receiver.",
    features: [],
    specs: [],
  },
  {
    id: "domes-open",
    name: "Open Domes (Medium)",
    category: "Accessories",
    subcategory: "Tips",
    price: "Rs. 1,500 / pack",
    image: "/products/acc-domes.png", // Placeholder
    description:
      "Silicone domes for RIC hearing aids. Allows natural sound to enter the ear.",
    features: [],
    specs: [],
  },
];
