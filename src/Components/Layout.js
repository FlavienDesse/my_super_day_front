import BusyIndicator from 'react-busy-indicator'
import React from 'react'
import {  NotFoundBoundary, useLoadingRoute } from 'react-navi'
import Error404 from "../Model/Error404";

export default function Layout({ children }) {
    // If there is a route that hasn't finished loading, it can be
    // retrieved with `useLoadingRoute()`.
    let loadingRoute = useLoadingRoute()

    return (
        <div className="Layout">
            {/* This component shows a loading indicator after a delay */}
            <BusyIndicator isBusy={!!loadingRoute} delayMs={200} />
            <main>
                <NotFoundBoundary render={Error404}>
                    {children}
                </NotFoundBoundary>
            </main>
        </div>
    )
}
