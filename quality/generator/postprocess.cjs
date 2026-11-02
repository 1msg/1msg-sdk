// Vendored compatibility transforms; provenance.json identifies the source commit.
const fs = require("node:fs");
const path = require("node:path");

function postProcessGeneratedTypeScriptSdk(outputDir) {
  const srcDir = path.join(outputDir, 'src');
  const runtimePath = path.join(srcDir, 'runtime.ts');
  const apisIndexPath = path.join(srcDir, 'apis', 'index.ts');
  const generatedIndexPath = path.join(srcDir, 'index.ts');
  const profileInfoPath = path.join(srcDir, 'models', 'ProfileInfo.ts');
  const modelsIndexPath = path.join(srcDir, 'models', 'index.ts');

  if (fs.existsSync(runtimePath)) {
    const runtime = fs.readFileSync(runtimePath, 'utf8');
    if (!runtime.includes('export function objectToJSON')) {
      fs.appendFileSync(
        runtimePath,
        '\nexport function objectToJSON(value: unknown): unknown {\n    return value;\n}\n',
      );
    }
  }

  const messagingApiPath = path.join(srcDir, 'apis', 'MessagingApi.ts');
  if (fs.existsSync(messagingApiPath)) {
    let messagingApi = fs.readFileSync(messagingApiPath, 'utf8');
    if (messagingApi.includes('objectToJSON(') && !messagingApi.includes('objectToJSON,')) {
      messagingApi = messagingApi.replace(
        "import * as runtime from '../runtime';",
        "import * as runtime from '../runtime';\nimport { objectToJSON } from '../runtime';",
      );
      fs.writeFileSync(messagingApiPath, messagingApi);
    }
  }

  if (!fs.existsSync(profileInfoPath)) {
    fs.writeFileSync(
      profileInfoPath,
      `/* tslint:disable */
/* eslint-disable */
import { mapValues } from '../runtime';

export interface ProfileInfo {
    about?: string;
    address?: string;
    description?: string;
    email?: string;
    phone?: string;
    vertical?: ProfileInfoVerticalEnum;
    photo?: string;
    websites?: Array<string>;
    [key: string]: unknown;
}

export const ProfileInfoVerticalEnum = {
    Automotive: 'Automotive',
    BeautySpaAndSalon: 'Beauty, Spa and Salon',
    ClothingAndApparel: 'Clothing and Apparel',
    Education: 'Education',
    Entertainment: 'Entertainment',
    EventPlanningAndService: 'Event Planning and Service',
    FinanceAndBanking: 'Finance and Banking',
    FoodAndGrocery: 'Food and Grocery',
    PublicService: 'Public Service',
    HotelAndLodging: 'Hotel and Lodging',
    MedicalAndHealth: 'Medical and Health',
    NonProfit: 'Non-profit',
    ProfessionalServices: 'Professional Services',
    ShoppingAndRetail: 'Shopping and Retail',
    TravelAndTransportation: 'Travel and Transportation',
    Restaurant: 'Restaurant',
    Other: 'Other',
} as const;
export type ProfileInfoVerticalEnum = typeof ProfileInfoVerticalEnum[keyof typeof ProfileInfoVerticalEnum];

export function ProfileInfoFromJSON(json: unknown): ProfileInfo {
    return ProfileInfoFromJSONTyped(json, false);
}

export function ProfileInfoFromJSONTyped(json: unknown, _ignoreDiscriminator: boolean): ProfileInfo {
    if (json == null || typeof json !== 'object') {
        return json as ProfileInfo;
    }
    return mapValues(json as Record<string, unknown>, (value) => value) as ProfileInfo;
}

export function ProfileInfoToJSON(value?: ProfileInfo | null): unknown {
    return value ?? null;
}
`,
    );

    if (fs.existsSync(modelsIndexPath)) {
      const modelsIndex = fs.readFileSync(modelsIndexPath, 'utf8');
      if (!modelsIndex.includes('./ProfileInfo')) {
        fs.appendFileSync(modelsIndexPath, "export * from './ProfileInfo';\n");
      }
    }
  }

  if (fs.existsSync(apisIndexPath)) {
    const apisDir = path.dirname(apisIndexPath);
    const apiExports = fs
      .readdirSync(apisDir)
      .filter((f) => f.endsWith('Api.ts'))
      .sort()
      .map((f) => {
        const name = f.replace(/\.ts$/, '');
        return `export { ${name} } from './${name}';`;
      })
      .join('\n');
    fs.writeFileSync(
      apisIndexPath,
      `/* tslint:disable */
/* eslint-disable */
${apiExports}
`,
    );
  }

  if (fs.existsSync(generatedIndexPath)) {
    fs.writeFileSync(
      generatedIndexPath,
      `/* tslint:disable */
/* eslint-disable */
export * from './runtime';
export * from './apis/index';
export * from './models/index';
`,
    );
  }

}
module.exports = { postProcessGeneratedTypeScriptSdk };
