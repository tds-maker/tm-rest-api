import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

import {DB_CONNECTION} from "./config";
import { Routes } from "./routes/";
class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    mongoose
      .connect(
        DB_CONNECTION,
        { useNewUrlParser: true }
      )
      .then(() => console.log("MongoDB Connected"))
      .catch(err => console.log(err));
    mongoose.set("useCreateIndex", true);
    mongoose.set("useFindAndModify", false);
  }
}

export default new App().app;
