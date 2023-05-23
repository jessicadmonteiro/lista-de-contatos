import "dotenv/config"
import path from "path"
import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"

const dataSourceConfig = (): DataSourceOptions => {

    const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}")
    const migrationsPath: string = path.join(__dirname, "./migrations/**.{ts,js}")
    const dbUrl: string | undefined = process.env.DATABASE_URL

    if(!dbUrl){

        throw new Error("Env var DATABASE_URL does not exists")
    }

    return {
        type: "postgres",
        url: dbUrl,
        synchronize: true,
        logging: true,
        migrations: [migrationsPath],
        entities: [entitiesPath],
    }

}

const AppDataSource = new DataSource (dataSourceConfig())

export {
    AppDataSource
}