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
]