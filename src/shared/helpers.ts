import { MongooseModuleOptions } from "@nestjs/mongoose";
import { getConfig } from "./config.provider";

export const createMongooseOptions = (uriConfigPath: string): MongooseModuleOptions => {
    return {
        uri: getConfig().get(uriConfigPath)
    }
}