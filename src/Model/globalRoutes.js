import {compose, mount, route, withView} from 'navi'
import React from 'react'


export default compose(
    withView((request,context) =>
        console.log(request)
    ),
    mount({
        '/mysuperday/dashboard/biorythme':
            route({
                getView:
                    async (req, context) => {
                        let connected = await context.authService.isConnected()
                        if (connected) {
                            const {Dashboard} = await import('../Components/DashBoard/dashboard')
                            const {Biorythm} = await import('../Components/Biorythm/BiorythmMain/biorythm')
                            return (
                                <Dashboard authService={context.authService}>
                                    <Biorythm>

                                    </Biorythm>
                                </Dashboard> )
                        } else {
                            const {SignIn} = await import('../Components/SignIn/signIn')
                            return <SignIn authService={context.authService}/>
                        }
                    },
            }),
        '/mysuperday/dashboard/calculatrice':
            route({
                getView:
                    async (req, context) => {
                        let connected = await context.authService.isConnected()
                        if (connected) {
                            const {Dashboard} = await import('../Components/DashBoard/dashboard')
                            const {Calculator} = await import('../Components/Calculator/CalculatorMain/calculator')
                            return (
                                <Dashboard authService={context.authService}>
                                    <Calculator>

                                    </Calculator>
                                </Dashboard> )
                        } else {
                            const {SignIn} = await import('../Components/SignIn/signIn')
                            return <SignIn authService={context.authService}/>
                        }
                    },
            }),
        '/mysuperday/dashboard':
            route({
                getView:
                    async (req, context) => {
                        let connected = await context.authService.isConnected()

                        if (connected) {
                            const {Dashboard} = await import('../Components/DashBoard/dashboard')
                            return <Dashboard authService={context.authService}/>
                        } else {
                            const {SignIn} = await import('../Components/SignIn/signIn')
                            return <SignIn authService={context.authService}/>
                        }


                    },
            }),
        '/':
            route({
                getView: async (req, context) => {

                    const {SignIn} = await import('../Components/SignIn/signIn')
                    return <SignIn authService={context.authService}/>
                },
            })
    })
)