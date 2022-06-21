import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall';

export const sideBarList = [
    {
        name: 'Tags',
        icon: <LocalOfferIcon />,
        path: '/'
    },
    {
        name: 'Trending',
        icon: <WhatshotIcon />,
        path: '/trending'
    },
    {
        name: 'Video Tags',
        icon: <MissedVideoCallIcon />,
        path: '/videotags'
    }
];