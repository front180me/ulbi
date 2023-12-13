import {lazy} from 'react'

export const AboutPageAsync = lazy(() => {
    return import('./AboutPage'); // 'AboutPage' must be exported by default
})