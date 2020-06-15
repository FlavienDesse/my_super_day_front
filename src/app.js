import React, {Suspense, useEffect, useState} from 'react'
import {authService} from './Model/helper'
import routes from './Model/globalRoutes'
import {Router, View} from 'react-navi'
import Layout from './Components/Layout'

window.url = "http://localhost:9000"

export default function App() {
    let [currentUser,setCurrentUser] = useState(() => authService.getCurrentUser())

    useEffect(()=> authService.subscribe(setCurrentUser),[])

    return (

        <Router routes={routes} context={{authService, currentUser}}>
            <Layout>
                <Suspense fallback={null}>
                    <View/>
                </Suspense>

            </Layout>

        </Router>
    )

}

