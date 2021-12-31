import {
    Arn as cdkArn,
    custom_resources as cdkCustomResources,
    Stack as cdkStack,
} from 'aws-cdk-lib';
import {
    Construct as cdkConstruct,
} from 'constructs';
import type {
    IDependable as cdkIDependable,
} from 'constructs';

export interface DelayProps {
    readonly dependencies: cdkIDependable[];
}

export class Delay extends cdkConstruct {
    public constructor(scope: cdkConstruct, id: string, props: DelayProps) {
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
                resources: [cdkArn.format({
                    service:  'sts',
                    region:   '',
                    resource: '',
                }, cdkStack.of(this))],
            }),
        });
        delay.node.addDependency(...props.dependencies);
    }
}
