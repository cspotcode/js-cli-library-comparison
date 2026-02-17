import * as o from "@optique/core";

import create from "./create.ts";
import deleteAsset from "./delete-asset.ts";
import delete_ from "./delete.ts";
import download from "./download.ts";
import edit from "./edit.ts";
import list from "./list.ts";
import upload from "./upload.ts";
import view from "./view.ts";

export default o.command(
  "release",
  o.or(
    o.group(
      "Available commands",
      o.or(create, list, delete_, deleteAsset, download, edit, upload, view),
    ),
  ),
  { brief: o.message`Manage releases` },
);
