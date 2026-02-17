import * as o from "@optique/core";

import close from "./close.ts";
import copy from "./copy.ts";
import create from "./create.ts";
import delete_ from "./delete.ts";
import edit from "./edit.ts";
import fieldCreate from "./field-create.ts";
import fieldDelete from "./field-delete.ts";
import fieldList from "./field-list.ts";
import itemAdd from "./item-add.ts";
import itemArchive from "./item-archive.ts";
import itemCreate from "./item-create.ts";
import itemDelete from "./item-delete.ts";
import itemEdit from "./item-edit.ts";
import itemList from "./item-list.ts";
import link from "./link.ts";
import list from "./list.ts";
import markTemplate from "./mark-template.ts";
import unlink from "./unlink.ts";
import view from "./view.ts";

export default o.command(
  "project",
  o.or(
    close,
    copy,
    create,
    delete_,
    edit,
    fieldCreate,
    fieldDelete,
    fieldList,
    itemAdd,
    itemArchive,
    itemCreate,
    itemDelete,
    itemEdit,
    itemList,
    link,
    list,
    markTemplate,
    unlink,
    view,
  ),
  {
    brief: o.message`Work with GitHub Projects`,
    description: o.message`Work with GitHub Projects.

The minimum required scope for the token is: \`project\`. You can verify your token scope by running \`gh auth status\` and add the \`project\` scope by running \`gh auth refresh ${o.optionName("-s")} project\`.`,
  },
);
