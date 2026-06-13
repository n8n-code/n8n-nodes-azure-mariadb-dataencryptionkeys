import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureMariadbDataencryptionkeys implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Mariadb Dataencryptionkeys',
                name: 'N8nDevAzureMariadbDataencryptionkeys',
                icon: { light: 'file:./azure-mariadb-dataencryptionkeys.png', dark: 'file:./azure-mariadb-dataencryptionkeys.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure management API enables CRUD operations for MariaDB servers, databases, firewall rules, VNET rules, and security alerts.',
                defaults: { name: 'Azure Mariadb Dataencryptionkeys' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureMariadbDataencryptionkeysApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
