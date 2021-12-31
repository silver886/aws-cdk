import {
    Arn as CdkArn,
    Stack as CdkStack,
    custom_resources as cdkCustomResources,
} from 'aws-cdk-lib';
import {
    Construct as AwsConstruct,
} from 'constructs';
import type {
    IDependable as AwsIDependable,
} from 'constructs';

export interface DelayProps {
    readonly dependencies: AwsIDependable[];
}

export class Delay extends AwsConstruct {
    public constructor(scope: AwsConstruct, id: string, props: DelayProps) {
        super(scope, id);

        const delaySdkCall: cdkCustomResources.AwsSdkCall = {
            service:            'STS',
            action:             'getCallerIdentity',
            physicalResourceId: cdkCustomResources.PhysicalResourceId.of(this.node.addr),
        };
        const delay = new cdkCustomResources.AwsCustomResource(this, 'delay', {
            resourceType: 'Custom::Delay',
            onCreate:     delaySdkCall,
            onUpdate:     delaySdkCall,
            onDelete:     delaySdkCall,
            policy:       cdkCustomResources.AwsCustomResourcePolicy.fromSdkCalls({
                resources: [CdkArn.format({
                    service:  'sts',
                    region:   '',
                    resource: '',
                }, CdkStack.of(this))],
            }),
        });
        delay.node.addDependency(...props.dependencies);
    }
}
