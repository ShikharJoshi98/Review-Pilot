import { IoVolumeMediumOutline } from "react-icons/io5";
import { LuAudioLines, LuHouse, LuLayoutDashboard, LuSettings } from "react-icons/lu";

export const sideNav = [
    {
        title: 'Dashboard',
        icon: LuHouse,
        path: '/dashboard'
    },
    {
        title: 'Explore Voices',
        icon: LuLayoutDashboard,
        path: '/dashboard/explore-voices'
    },
    {
        title: 'Text to speech',
        icon: LuAudioLines,
        path: '/dashboard/text-to-speech'
    },
    {
        title: 'Voice Cloning',
        icon: IoVolumeMediumOutline,
        path: '/dashboard/voice-cloning'
    },
    {
        title: 'Settings',
        icon: LuSettings,
        path: '/dashboard/settings'
    }
];

export const quickActions = [
    {
        title: "Narrate a story",
        description: "Bring characters to life with expressive AI narration",
        gradient: "from-cyan-400 to-cyan-50"
    },
    {
        title: "Record an Ad",
        description: "Create professional advertisements with lifelike AI voices",
        gradient: "from-pink-400 to-pink-100"
    },
    {
        title: "Direct a movie scene",
        description: "Generate dramatic dialogue for film and video",
        gradient: "from-violet-400 to-violet-50"
    },
    {
        title: "Voice a Game Character",
        description: "Build immersive words with dynamic character voices",
        gradient: "from-orange-400 to-orange-100"
    },
    {
        title: "Introduce Your Podcast",
        description: "Hook your listeners from the very first second",
        gradient: "from-blue-500 to-blue-100"
    },
    {
        title: "Guide a Meditation",
        description: "Craft soothing, calming audio for wellness content",
        gradient: "from-green-500 to-green-100"
    }
];

export const sliders = [
    {
        id: "temperature",
        label: "Creativity",
        leftLabel: "Consistent",
        rightLabel: "Expressive",
        min: 0,
        max: 2,
        step: 0.1,
        defaultValue: 0.8
    },
    {
        id: "topP",
        label: "Voice Variety",
        leftLabel: "Stable",
        rightLabel: "Dynamic",
        min: 0,
        max: 1,
        step: 0.05,
        defaultValue: 0.95
    },
    {
        id: "topK",
        label: "Expression Range",
        leftLabel: "Subtle",
        rightLabel: "Dramatic",
        min: 1,
        max: 10000,
        step: 100,
        defaultValue: 1000
    },
    {
        id: "repetationPenalty",
        label: "Natural flow",
        leftLabel: "Rhythmic",
        rightLabel: "Varied",
        min: 1,
        max: 2,
        step: 0.1,
        defaultValue: 1.2
    }
]