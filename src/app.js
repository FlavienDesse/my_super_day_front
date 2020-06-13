import React, {Suspense, useState} from 'react'
import {authService} from './Model/helper'
import routes from './Model/globalRoutes'
import {Router, View} from 'react-navi'
import Layout from './Components/Layout'

export default function App() {
    let [currentUser] = useState(() => authService.getCurrentUser())


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

