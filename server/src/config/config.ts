const mongoAPI = process.env.MONGO_API;
const config = {
    mongo: {
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            poolSize: 50,
            autoIndex: false,
            retryWrites: false
        },
        url:`mongodb+srv://maoushimazu:${mongoAPI}@cluster0.9m5gdqg.mongodb.net/?retryWrites=true&w=majority`
    },
    server: {
        host: "localhost",
        port: 4000
    }
}

export default config;