#!/usr/bin/env node
import 'source-map-support/register';
import { App, Duration, Environment } from 'aws-cdk-lib';
import { AppStack } from '../lib/app-stack';

const app = new App();

const env: Environment = {
  region: process.env.CDK_DEFAULT_REGION,
};

new AppStack(app, 'lambda-url-signing', {
  env,
  local: {
    ttl: Duration.days(1),
  },
});
