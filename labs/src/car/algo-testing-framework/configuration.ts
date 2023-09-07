export interface IConfiguration
{
    verifySolutions ?: boolean;
    language: 'en' | 'nl';
}

export let configuration : IConfiguration = { verifySolutions: true, language: 'en' };

export function configure(config : IConfiguration)
{
    configuration = { ...configuration, ...config };
}