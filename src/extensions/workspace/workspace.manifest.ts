import { ExtensionManifest } from '@teambit/harmony';
import workspaceProvider from './workspace.provider';
import { ScopeExt } from '../scope';
import { ComponentFactoryExt } from '../component';
import { IsolatorExt } from '../isolator';
import { LoggerExt } from '../logger';
import { DependencyResolverExt } from '../dependency-resolver';
import { EXT_NAME } from './constants';

export default {
  name: EXT_NAME,
  dependencies: [ScopeExt, ComponentFactoryExt, IsolatorExt, DependencyResolverExt, LoggerExt],
  provider: workspaceProvider
} as ExtensionManifest;
