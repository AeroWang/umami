import { NextApiRequest, NextApiResponse } from 'next';
import { ok, methodNotAllowed } from 'next-basics';
// import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

export interface ConfigResponse {
  telemetryDisabled: boolean;
  trackerScriptName: string;
  uiDisabled: boolean;
  updatesDisabled: boolean;
}

export default async (req: NextApiRequest, res: NextApiResponse<ConfigResponse>) => {
  if (req.method === 'GET') {
    return ok(res, {
      telemetryDisabled: !!process.env.DISABLE_TELEMETRY,
      trackerScriptName: process.env.TRACKER_SCRIPT_NAME,
      uiDisabled: !!process.env.DISABLE_UI,
      updatesDisabled: !!process.env.DISABLE_UPDATES,
    });
  }
  // const { env, cf, ctx } = getRequestContext();

  return methodNotAllowed(res);
};
