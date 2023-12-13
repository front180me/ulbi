import {lazy} from 'react'

// export const MainPageAsync = lazy(() => {
//     return import('./MainPage'); // 'MainPage' must be exported by default
// })

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // For demo purposes
    setTimeout(() => resolve(import('./MainPage')), 1500)
}))