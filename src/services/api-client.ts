import axios, { CanceledError } from "axios";

export {CanceledError};

export default axios.create({baseURL: "https://api.rawg.io/api", params: {key: "d14daf4e30b64cb8bda1330f867251ab"}});