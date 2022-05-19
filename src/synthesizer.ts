import {
    DefaultStackSynthesizer,
    Fn,
    Names as AwsNames,
    Resource as AwsResource,
} from 'aws-cdk-lib';

export class DefaultStackSynthesizerRoleArn {
    /**
     * Default CloudFormation role ARN.
     *
     * @stability stable
     */
    static readonly defaultCloudformation = Fn.sub(DefaultStackSynthesizer.DEFAULT_CLOUDFORMATION_ROLE_ARN, {
                        Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
                    })

/**
     * Default deploy role ARN.
     *
     * @stability stable
     */
    static readonly defaultDeploy = Fn.sub(DefaultStackSynthesizer.DEFAULT_DEPLOY_ROLE_ARN, {
                        Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
                    })

/**
     * Default asset publishing role ARN for file (S3) assets.
     *
     * @stability stable
     */
    static readonly defaultFileAssetPublishing = Fn.sub(DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PUBLISHING_ROLE_ARN, {
                        Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
                    })

/**
     * Default asset publishing role ARN for image (ECR) assets.
     *
     * @stability stable
     */
    static readonly defaultImageAssetPublishing = Fn.sub(DefaultStackSynthesizer.DEFAULT_IMAGE_ASSET_PUBLISHING_ROLE_ARN, {
                        Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
                    })

/**
     * Default lookup role ARN for missing values.
     *
     * @stability stable
     */
    static readonly defaultLookup = Fn.sub(DefaultStackSynthesizer.DEFAULT_LOOKUP_ROLE_ARN, {
                        Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
                    })



}
