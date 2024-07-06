import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-2u9chhj-shard-00-00.jotqcag.mongodb.net:27017,ac-2u9chhj-shard-00-01.jotqcag.mongodb.net:27017,ac-2u9chhj-shard-00-02.jotqcag.mongodb.net:27017/?ssl=true&replicaSet=atlas-2y7idg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;