export const signInWithUsernamePassword = (
  url: string,
  options?: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    headers?: {
      Xtag1: string;
      Auth: string;
    };
  },
): Promise<{
  status: 'ok' | 'no' | 'error';
  message?: string;
  session?: string;
  user?: { [K: string]: string };
}> =>
  new Promise(resolve => {
    if (url !== 'https://my-domain.pix/api/login' || !options?.headers?.Xtag1 || (options?.method && options?.method !== 'GET')) {
      return setTimeout(
        () =>
          resolve({
            status: 'error',
            message: 'system error',
          }),
        250,
      );
    }
    const data = options?.headers?.Auth?.split(':');
    if (!data?.[0] || !data?.[1]) {
      return setTimeout(
        () =>
          resolve({
            status: 'no',
            message: 'unknown user',
          }),
        250,
      );
    }

    setTimeout(
      () =>
        resolve({
          status: 'ok',
          session: 'xxx00022200xxx',
          user: { name: 'John Doe' },
        }),
      250,
    );
  });
