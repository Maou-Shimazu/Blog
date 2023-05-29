const config = {
    mongo: {
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            autoIndex: false,
            retryWrites: false
        },
        url:`mongodb+srv://maoushimazu:sensmaoushimazu@cluster0.9m5gdqg.mongodb.net/blog`
    },
    server: {
        host: "localhost",
        port: 3000
    }
}

export default config;