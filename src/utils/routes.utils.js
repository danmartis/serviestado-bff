// Utils

// Funcion para ver mejor visualmente las rutas
const parseRoutes = (routes) => {
    for (const route of routes) {
        console.log(`[${route.methods}] - ${route.path}`)        
    }
}

module.exports = { parseRoutes }