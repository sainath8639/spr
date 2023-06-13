import view from "ramda/src/view";
import lensProp from "ramda/src/lensProp";
import pathOr from "ramda/src/pathOr";

import BaseEntity from "modules/infra/BaseEntity";

import { CommunityRolesAndPermissions } from "modules/community/types/communityRolesAndPermissions";

const idLens = lensProp("id");
const nameLens = lensProp("name");
const descriptionLens = lensProp("description");
const orderLens = lensProp("order");
const createdByLens = lensProp("createdBy");
const createdAtLens = lensProp("createdAt");
const rolesAndPermissionsIdLens = lensProp("rolesAndPermissionsId");

const lastModifiedAtLens = lensProp("lastModifiedAt");

const getTranslationsPath = (language) => ["lSContent", language];

class CommunityRolesAndPermissionsEntity extends BaseEntity {
  static getId = view<
    CommunityRolesAndPermissions,
    CommunityRolesAndPermissions["id"]
  >(idLens);

  static getTitle = view<
    CommunityRolesAndPermissions,
    CommunityRolesAndPermissions["name"]
  >(nameLens);

  static getMessage = view<
    CommunityRolesAndPermissions,
    CommunityRolesAndPermissions["description"]
  >(descriptionLens);

  static getOrder = view<
    CommunityRolesAndPermissions,
    CommunityRolesAndPermissions["order"]
  >(orderLens);

  static getCreatedBy = view<
    CommunityRolesAndPermissions,
    CommunityRolesAndPermissions["createdBy"]
  >(createdByLens);

  static getCreatedAt = view<
    CommunityRolesAndPermissions,
    CommunityRolesAndPermissions["createdAt"]
  >(createdAtLens);

  static getLastModifiedAt = view<
    CommunityRolesAndPermissions,
    CommunityRolesAndPermissions["lastModifiedAt"]
  >(lastModifiedAtLens);
}

export { CommunityRolesAndPermissionsEntity };
