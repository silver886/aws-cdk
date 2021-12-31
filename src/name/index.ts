import {
    Names as cdkNames,
    Resource as cdkResource,
} from 'aws-cdk-lib';

export class Name extends cdkResource {
    /**
     * Returns a path from root (stack) to node.
     */
    public readonly path: string = this.toString();

    /**
     * Returns a CloudFormation-compatible unique identifier for a construct based on its path.
     *
     * Usually represents the node.
     *
     * The identifier includes a human readable portion rendered
     * from the path components and a hash suffix.
     */
    public readonly logical: string = cdkNames.uniqueId(this);

    /**
     * Returns a CloudFormation-compatible unique identifier for a construct based on its stack name and path.
     *
     * Usually represents the resource (with stack name instead of id).
     *
     * The identifier includes a human readable portion rendered
     * from the stack name and the path components and a hash suffix.
     */
    public readonly stackLogical: string = `${this.stack.stackName}-${this.logical.replace(this.stack.node.id, '')}`;
}
