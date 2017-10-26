import { compose } from 'glue';
import {Server} from "hapi";

export async function start(manifest) {
    try {
        const server: Server = await compose(manifest, {
            relativeTo: __dirname
        });

        await server.start();

        console.log(`App running at ${server.info.uri}`);
    } catch (error) {
        console.error(error);
    }
}