import {BOOTSTRAP_QUALIFIER_CONTEXT, DefaultStackSynthesizer, Fn} from 'aws-cdk-lib';
import type {DefaultStackSynthesizerProps, Stack} from 'aws-cdk-lib';

export class StackSynthesizerCfnString {
    /**
     * Default CloudFormation role ARN.
     */
    public static readonly defaultCloudformationRoleArn = Fn.sub(
        DefaultStackSynthesizer.DEFAULT_CLOUDFORMATION_ROLE_ARN,
        {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
        },
    );

    /**
     * Default deploy role ARN.
     */
    public static readonly defaultDeployRoleArn = Fn.sub(
        DefaultStackSynthesizer.DEFAULT_DEPLOY_ROLE_ARN,
        {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
        },
    );

    /**
     * Default asset publishing role ARN for file (S3) assets.
     */
    public static readonly defaultFileAssetPublishingRoleArn = Fn.sub(
        DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PUBLISHING_ROLE_ARN,
        {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
        },
    );

    /**
     * Default asset publishing role ARN for image (ECR) assets.
     */
    public static readonly defaultImageAssetPublishingRoleArn = Fn.sub(
        DefaultStackSynthesizer.DEFAULT_IMAGE_ASSET_PUBLISHING_ROLE_ARN,
        {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
        },
    );

    /**
     * Default lookup role ARN for missing values.
     */
    public static readonly defaultLookupRoleArn = Fn.sub(
        DefaultStackSynthesizer.DEFAULT_LOOKUP_ROLE_ARN,
        {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
        },
    );

    /**
     * Default image assets repository name
     */
    public static readonly defaultImageAssetsRepositoryName = Fn.sub(
        DefaultStackSynthesizer.DEFAULT_IMAGE_ASSETS_REPOSITORY_NAME,
        {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
        },
    );

    /**
     * Default file assets bucket name
     */
    public static readonly defaultFileAssetsBucketName = Fn.sub(
        DefaultStackSynthesizer.DEFAULT_FILE_ASSETS_BUCKET_NAME,
        {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
        },
    );

    /**
     * Name of the CloudFormation Export with the asset key name
     */
    public static readonly defaultFileAssetKeyArnExportName = Fn.sub(
        DefaultStackSynthesizer.DEFAULT_FILE_ASSET_KEY_ARN_EXPORT_NAME,
        {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
        },
    );

    /**
     * Default file asset prefix
     */
    public static readonly defaultFileAssetPrefix = Fn.sub(
        DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PREFIX,
        {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
        },
    );

    /**
     * Default Docker asset prefix
     */
    public static readonly defaultDockerAssetPrefix = Fn.sub(
        DefaultStackSynthesizer.DEFAULT_DOCKER_ASSET_PREFIX,
        {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
        },
    );

    /**
     * Default bootstrap stack version SSM parameter.
     */
    public static readonly defaultBootstrapStackVersionSsmParameter = Fn.sub(
        DefaultStackSynthesizer.DEFAULT_BOOTSTRAP_STACK_VERSION_SSM_PARAMETER,
        {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Qualifier: DefaultStackSynthesizer.DEFAULT_QUALIFIER,
        },
    );

    private readonly props: DefaultStackSynthesizerProps;

    private readonly stack: Stack;

    public constructor(stack: Stack, props: DefaultStackSynthesizerProps) {
        this.props = props;
        this.stack = stack;
    }

    /**
     * The role CloudFormation will assume when deploying the Stack
     */
    public get cloudFormationExecutionRole(): string {
        return Fn.sub(
            this.props.cloudFormationExecutionRole ?? DefaultStackSynthesizer.DEFAULT_CLOUDFORMATION_ROLE_ARN,
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                Qualifier: this.props.qualifier ??
                    (this.stack.node.tryGetContext(BOOTSTRAP_QUALIFIER_CONTEXT) as string | undefined) ??
                    DefaultStackSynthesizer.DEFAULT_QUALIFIER,
            },
        );
    }

    /**
     * The role to assume to initiate a deployment in this environment
     */
    public get deployRoleArn(): string {
        return Fn.sub(
            this.props.deployRoleArn ?? DefaultStackSynthesizer.DEFAULT_DEPLOY_ROLE_ARN,
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                Qualifier: this.props.qualifier ??
                    (this.stack.node.tryGetContext(BOOTSTRAP_QUALIFIER_CONTEXT) as string | undefined) ??
                    DefaultStackSynthesizer.DEFAULT_QUALIFIER,
            },
        );
    }

    /**
     * The role to use to publish file assets to the S3 bucket in this environment
     */
    public get fileAssetPublishingRoleArn(): string {
        return Fn.sub(
            this.props.fileAssetPublishingRoleArn ?? DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PUBLISHING_ROLE_ARN,
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                Qualifier: this.props.qualifier ??
                    (this.stack.node.tryGetContext(BOOTSTRAP_QUALIFIER_CONTEXT) as string | undefined) ??
                    DefaultStackSynthesizer.DEFAULT_QUALIFIER,
            },
        );
    }

    /**
     * The role to use to publish image assets to the ECR repository in this environment
     */
    public get imageAssetPublishingRoleArn(): string {
        return Fn.sub(
            this.props.imageAssetPublishingRoleArn ?? DefaultStackSynthesizer.DEFAULT_IMAGE_ASSET_PUBLISHING_ROLE_ARN,
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                Qualifier: this.props.qualifier ??
                    (this.stack.node.tryGetContext(BOOTSTRAP_QUALIFIER_CONTEXT) as string | undefined) ??
                    DefaultStackSynthesizer.DEFAULT_QUALIFIER,
            },
        );
    }

    /**
     * The role to use to look up values from the target AWS account during synthesis
     */
    public get lookupRoleArn(): string {
        return Fn.sub(
            this.props.lookupRoleArn ?? DefaultStackSynthesizer.DEFAULT_LOOKUP_ROLE_ARN,
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                Qualifier: this.props.qualifier ??
                    (this.stack.node.tryGetContext(BOOTSTRAP_QUALIFIER_CONTEXT) as string | undefined) ??
                    DefaultStackSynthesizer.DEFAULT_QUALIFIER,
            },
        );
    }

    /**
     * Name of the ECR repository to hold Docker Image assets
     */
    public get imageAssetsRepositoryName(): string {
        return Fn.sub(
            this.props.imageAssetsRepositoryName ?? DefaultStackSynthesizer.DEFAULT_IMAGE_ASSETS_REPOSITORY_NAME,
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                Qualifier: this.props.qualifier ??
                    (this.stack.node.tryGetContext(BOOTSTRAP_QUALIFIER_CONTEXT) as string | undefined) ??
                    DefaultStackSynthesizer.DEFAULT_QUALIFIER,
            },
        );
    }

    /**
     * Name of the S3 bucket to hold file assets
     */
    public get fileAssetsBucketName(): string {
        return Fn.sub(
            this.props.fileAssetsBucketName ?? DefaultStackSynthesizer.DEFAULT_FILE_ASSETS_BUCKET_NAME,
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                Qualifier: this.props.qualifier ??
                    (this.stack.node.tryGetContext(BOOTSTRAP_QUALIFIER_CONTEXT) as string | undefined) ??
                    DefaultStackSynthesizer.DEFAULT_QUALIFIER,
            },
        );
    }

    /**
     * BucketPrefix to use while storing S3 Assets
     */
    public get bucketPrefix(): string {
        return Fn.sub(
            this.props.bucketPrefix ?? DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PREFIX,
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                Qualifier: this.props.qualifier ??
                    (this.stack.node.tryGetContext(BOOTSTRAP_QUALIFIER_CONTEXT) as string | undefined) ??
                    DefaultStackSynthesizer.DEFAULT_QUALIFIER,
            },
        );
    }

    /**
     * A prefix to use while tagging and uploading Docker images to ECR.
     */
    public get dockerTagPrefix(): string {
        return Fn.sub(
            this.props.dockerTagPrefix ?? DefaultStackSynthesizer.DEFAULT_DOCKER_ASSET_PREFIX,
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                Qualifier: this.props.qualifier ??
                    (this.stack.node.tryGetContext(BOOTSTRAP_QUALIFIER_CONTEXT) as string | undefined) ??
                    DefaultStackSynthesizer.DEFAULT_QUALIFIER,
            },
        );
    }

    /**
     * Bootstrap stack version SSM parameter.
     */
    public get bootstrapStackVersionSsmParameter(): string {
        return Fn.sub(
            // eslint-disable-next-line max-len
            this.props.bootstrapStackVersionSsmParameter ?? DefaultStackSynthesizer.DEFAULT_BOOTSTRAP_STACK_VERSION_SSM_PARAMETER,
            {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                Qualifier: this.props.qualifier ??
                    (this.stack.node.tryGetContext(BOOTSTRAP_QUALIFIER_CONTEXT) as string | undefined) ??
                    DefaultStackSynthesizer.DEFAULT_QUALIFIER,
            },
        );
    }
}
