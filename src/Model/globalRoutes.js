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
        '/mysuperday/dashboard/agenda': map(async (request, context) =>
            await context.authService.isConnected() ? route({
                    getView:
                        async (req, context) => {
                            const {Dashboard} = await import('../Components/DashBoard/dashboard')
                            const {Agenda} = await import('../Components/Agenda/AgendaMain/agenda')
                            return (
                                <Dashboard  authService={context.authService}>
                                    <Agenda/>
                                </Dashboard>
                            )
                        },
                })
                :
                redirect('/mysuperday/users/signin')
        ),
        '/mysuperday/dashboard/traducteur': map(async (request, context) =>
            await context.authService.isConnected() ? route({
                    getView:
                        async (req, context) => {
                            const {Dashboard} = await import('../Components/DashBoard/dashboard')
                            const {TraductorMain} = await import('../Components/Traductor/TraductorMain/traductorMain')
                            return (
                                <Dashboard  authService={context.authService}>
                                    <TraductorMain/>
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
        '/mysuperday/dashboard/horoscope': map(async (request, context) =>
            await context.authService.isConnected() ? route({
                    getView:
                        async (req, context) => {
                            const {Dashboard} = await import('../Components/DashBoard/dashboard')
                            const {Horoscope} = await import('../Components/Horoscope/HoroscopeMain/horoscope')
                            return (
                                <Dashboard  authService={context.authService}>
                                    <Horoscope/>
                                </Dashboard>
                            )
                        },
                })
                :
                redirect('/mysuperday/users/signin')
        ),
        '/mysuperday/dashboard/blocNote': map(async (request, context) =>
            await context.authService.isConnected() ? route({

                    getView:
                        async (req, context) => {
                            const {Dashboard} = await import('../Components/DashBoard/dashboard')
                            const {NoteBlock} = await import('../Components/NoteBlock/NoteBlockMain/noteBlock')
                            return (
                                <Dashboard  authService={context.authService}>
                                    <NoteBlock authService={context.authService}/>
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