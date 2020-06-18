import {compose, mount, route, redirect, map} from 'navi'
import React from 'react'

export default compose(
    mount({
        '/mysuperday/dashboard/biorythme': map(async (request, context) =>
            await context.authService.isConnected() ? route({
                    getView:
                        async (req, context) => {
                            const {Dashboard} = await import('../Components/DashBoard/dashboard')
                            const {Biorythm} = await import('../Components/Biorythm/BiorythmMain/biorythm')
                            return (
                                <Dashboard  authService={context.authService}>
                                    <Biorythm/>
                                </Dashboard>
                            )
                        },
                })
                :
                redirect('/mysuperday/users/signin')
        ),
        '/mysuperday/dashboard/meteo': map(async (request, context) =>
            await context.authService.isConnected() ? route({
                    getView:
                        async (req, context) => {
                            const {Dashboard} = await import('../Components/DashBoard/dashboard')
                            const {Weather} = await import('../Components/Weather/WeatherMain/weatherMain')
                            return (
                                <Dashboard  authService={context.authService}>
                                    <Weather/>
                                </Dashboard>
                            )
                        },
                })
                :
                redirect('/mysuperday/users/signin')
        ),
        '/mysuperday/dashboard/calculatrice': map(async (request, context) =>
            await context.authService.isConnected() ? route({

                    getView:
                        async (req, context) => {
                            const {Dashboard} = await import('../Components/DashBoard/dashboard')
                            const {Calculator} = await import('../Components/Calculator/CalculatorMain/calculator')
                            return (
                                <Dashboard  authService={context.authService}>
                                    <Calculator authService={context.authService}/>
                                </Dashboard>
                            )
                        },
                })
                :
                redirect('/mysuperday/users/signin')
        ),
        '/mysuperday/dashboard': map(async (request, context) =>
            await context.authService.isConnected() ? route({
                    getView:
                        async (req, context) => {
                            const {Dashboard} = await import('../Components/DashBoard/dashboard')
                            return <Dashboard authService={context.authService}/>
                        },
                })
                :
                redirect('/mysuperday/users/signin')
        ),
        '/mysuperday/users/signup': route({
            getView:
                async (req, context) => {
                    const {SignUp} = await import('../Components/SignUp/signUp')
                    return <SignUp authService={context.authService}/>
                },
        }),
        '/mysuperday/users/signin': map(async (request, context) =>
            await context.authService.isConnected() ?
                redirect('/mysuperday/dashboard')
                : route({
                    getView:
                        async (req, context) => {

                            const {SignIn} = await import('../Components/SignIn/signIn')
                            return <SignIn authService={context.authService}/>
                        },
                })
        ),
        '/': redirect('/mysuperday/users/signin'),
        '/mysuperday': redirect('/mysuperday/users/signin'),

    })
)