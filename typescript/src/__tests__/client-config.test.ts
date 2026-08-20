import { ClientConfig } from '../client-config';

describe('ClientConfig', () => {
  const baseOptions = {
    baseUrl: 'https://api.stage.1msg.io',
    instanceId: 'ODI371267300',
    token: 'test-api-token',
  };

  it('builds basePath with instance id', () => {
    const config = new ClientConfig(baseOptions);
    expect(config.basePath).toBe('https://api.stage.1msg.io/ODI371267300');
  });

  it('builds request URL with token query param', () => {
    const config = new ClientConfig(baseOptions);
    const url = config.buildRequestUrl('/sendMessage');
    expect(url).toBe(
      'https://api.stage.1msg.io/ODI371267300/sendMessage?token=test-api-token',
    );
  });

  it('normalizes trailing slash on baseUrl', () => {
    const config = new ClientConfig({
      ...baseOptions,
      baseUrl: 'https://api.stage.1msg.io/',
    });
    expect(config.basePath).toBe('https://api.stage.1msg.io/ODI371267300');
  });

  it('accepts paths without leading slash', () => {
    const config = new ClientConfig(baseOptions);
    const url = config.buildRequestUrl('sendMessage');
    expect(url).toContain('/ODI371267300/sendMessage?token=');
  });

  it('throws when required fields are missing', () => {
    expect(() => new ClientConfig({ ...baseOptions, token: '' })).toThrow(
      'ClientConfig.token is required',
    );
    expect(() => new ClientConfig({ ...baseOptions, instanceId: '' })).toThrow(
      'ClientConfig.instanceId is required',
    );
    expect(() => new ClientConfig({ ...baseOptions, baseUrl: '' })).toThrow(
      'ClientConfig.baseUrl is required',
    );
  });
});
