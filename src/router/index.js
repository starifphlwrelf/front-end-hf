
import Candidate from "../pages/Candidate"
import Home from "../pages/Home"
import Vote from "../pages/Vote"


const PageRoute = () => {
    return [
        {
            path: '/home',
            link: '/home',
            name : 'Home',
            component: Home
        },
        {
            path: '/vote',
            link: '/vote',
            name : 'Vote',
            component: Vote

        },
        {
            path: '/candidate',
            link: '/candidate',
            name : 'Candidate',
            component: Candidate

        },

    ]

    
}

export default PageRoute()