import {BuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer (options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true, // open browser page on server start
        historyApiFallback: true, // make routes through main page (SPA), is needed when refresh on some page
        hot: true,
    }
}