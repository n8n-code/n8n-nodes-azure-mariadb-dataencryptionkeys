import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureMariadbDataencryptionkeysApi implements ICredentialType {
        name = 'N8nDevAzureMariadbDataencryptionkeysApi';

        displayName = 'Azure Mariadb Dataencryptionkeys API';

        icon: Icon = { light: 'file:../nodes/AzureMariadbDataencryptionkeys/azure-mariadb-dataencryptionkeys.png', dark: 'file:../nodes/AzureMariadbDataencryptionkeys/azure-mariadb-dataencryptionkeys.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Mariadb Dataencryptionkeys API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
