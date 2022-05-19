import {DefaultStackSynthesizer, Fn} from 'aws-cdk-lib';

export const DEFAULT_STACK_SYNTHESIZER: {
    readonly defaultCloudformationRoleArn: string;
    readonly defaultDeployRoleArn: string;
    readonly defaultFileAssetPublishingRoleArn: string;
    readonly defaultImageAssetPublishingRoleArn: string;
    readonly defaultLookupRoleArn: string;
} = {
    /**
     * Default CloudFormation role ARN.
     */
    defaultCloudformationRoleArn: Fn.sub(DefaultStackSynthesizer.DEFAULT_CLOUDFORMATION_ROLE_ARN, {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
    }),

    /**
     * Default deploy role ARN.
     */
    defaultDeployRoleArn: Fn.sub(DefaultStackSynthesizer.DEFAULT_DEPLOY_ROLE_ARN, {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
    }),

    /**
     * Default asset publishing role ARN for file (S3) assets.
     */
    defaultFileAssetPublishingRoleArn: Fn.sub(DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PUBLISHING_ROLE_ARN, {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
    }),

    /**
     * Default asset publishing role ARN for image (ECR) assets.
     */
    defaultImageAssetPublishingRoleArn: Fn.sub(DefaultStackSynthesizer.DEFAULT_IMAGE_ASSET_PUBLISHING_ROLE_ARN, {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
    }),

    /**
     * Default lookup role ARN for missing values.
     */
    defaultLookupRoleArn: Fn.sub(DefaultStackSynthesizer.DEFAULT_LOOKUP_ROLE_ARN, {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
    }),
};
