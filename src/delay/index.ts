import * as cdk from '@aws-cdk/core';

import * as customResources from '@aws-cdk/custom-resources';

export interface DelayProps {
    readonly dependencies: cdk.IDependable[];
}

export class Delay extends cdk.Construct {
    public constructor(scope: cdk.Construct, id: string, props: DelayProps) {
        super(scope, id);

        const delaySdkCall: customResources.AwsSdkCall = {
            service:            'STS',
            action:             'getCallerIdentity',
            physicalResourceId: customResources.PhysicalResourceId.of(this.node.addr),
        };
        const delay = new customResources.AwsCustomResource(this, 'delay', {
            resourceType: 'Custom::Delay',
            onCreate:     delaySdkCall,
            onUpdate:     delaySdkCall,
            onDelete:     delaySdkCall,
            policy:       customResources.AwsCustomResourcePolicy.fromSdkCalls({
                resources: [cdk.Arn.format({
                    service:  'sts',
                    region:   '',
                    resource: '',
                }, cdk.Stack.of(this))],
            }),
        });
        delay.node.addDependency(...props.dependencies);
    }
}
